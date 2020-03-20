import { Component, OnInit,AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { IonContent,ActionSheetController, Platform} from '@ionic/angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';  
import { DatePipe } from '@angular/common';
import { PopoverController } from '@ionic/angular'; 
import { PopoverComponent } from '../popover/popover.component';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit{ 
//@ViewChild(IonContent, {read: IonContent}) myContent: IonContent;
@ViewChild(IonContent) content: IonContent;

messages = [];
gruopMessages = [];
socket_url : string = "";
teamId = '';
userId = '';
ref_code = '';
loggedInUsername = '';
nickname = '';
owner = '';
message = '';
message_wanrings = '';
messageDateString:any;
msgSent:boolean=false;
disableClick:boolean=true;

constructor(
  private route: ActivatedRoute, public popoverController: PopoverController,  
  private http: HttpClient, 
  public itemService: ItemService,
  public alertController: AlertController,
  public loadingController: LoadingController,
  private socket: Socket,
  private datePipe: DatePipe,
   private  Network: Network
) {  
    Network.onDisconnect().subscribe(() => {
      this.disableClick=false;

    });
    Network.onConnect().subscribe(() => {
        this.disableClick=true;
    });
    this.userId = sessionStorage.getItem("loggedInId"); 
    this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
    this.ref_code = sessionStorage.getItem("ref_code");
    this.socket_url =   environment.socket_url;
    this.socket.connect(); 
    this.route.queryParams.subscribe(params => { 
      this.teamId = params['teamId'];
      this.owner = params['owner'];
      this.nickname = params['nickname'];   
    });   
    this.joinChat(); 
    this.loadMessages();  
    this.loadMyMessages();  
    //this.getMessages();  
} 

  async presentPopover(ev: any) { 
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        componentProps:{teamId:this.teamId,baseurl: environment.base_url,ref_code:this.ref_code,group_title:this.nickname,owner:this.owner},
        event: ev,
        translucent: true
      });  

      return await popover.present();
  } 

  ionViewWillLeave() {
    console.log('disconnect');
    this.socket.removeAllListeners(this.teamId);
    this.socket.disconnect();
  }

  ionViewDidLeave() {
    this.socket.removeAllListeners(this.teamId);
    console.log('disconnect');
    this.socket.disconnect();
  }

  ngOnInit() {   
    this.getMessages();   
    this.content.scrollToBottom(0);
  }
  
  ionViewDidEnter(){
  //  this.ScrollToBottom();
    this.content.scrollToBottom();
  }

  joinChat() {   
    this.socket.emit('set-nickname', {'nickname':this.nickname,'from_id':this.userId,'username':this.loggedInUsername,'to_id':this.teamId});
  }

  /***************scroll down******************/

  ScrollToBottom(){
      this.content.scrollToBottom(1500);
  }
  /***************scroll down******************/

  getMessages() { 
    console.log('----getMessages---');
    this.socket.on('getMessage', (data) => { 
      console.log(data); 
      this.content.scrollToBottom(0);
      let counter = this.gruopMessages.length - 1;
      if(this.gruopMessages[counter].created_at != data.created_at && this.gruopMessages[counter].username != data.username){
         this.gruopMessages.push(data);
      }
      console.log('lllll',this.gruopMessages);
    });   
  } 

  async loadMyMessages() { //fetch request get from db
      this.socket.on('messages', (data) => {  
      this.gruopMessages = data.messages;  
    }); 
    console.log(this.gruopMessages);
  }

  loadMessages() { // Initiate request get from db
    this.socket.emit('load-messages',{userId: this.userId,teamId: this.teamId} ); 
    console.log(this.gruopMessages);
  }

  isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
  }
  async customsmessage(msg) { 
    const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      
      cssClass: 'custom-class custom-loading1',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  sendMessage() { 
    if(this.disableClick == false){
      this.customsmessage("No internet connection")
     //   alert('Please check connectivity');  

    }
    if(!this.isEmptyOrSpaces(this.message) && this.disableClick == true){ 
      let created_at = new Date();
      this.socket.emit('newMessage', { userId: this.userId,teamId: this.teamId,username:this.loggedInUsername,msg: this.message,created_at});
      this.gruopMessages.push({created_at,from_id:this.userId,userId: this.teamId, from: this.userId,username:this.loggedInUsername,message: this.message});
      this.message = '';  
      this.content.scrollToBottom(0);
      this.ScrollToBottom();
      this.message_wanrings ='';
    }
    else
    {
      this.message_wanrings = 'Please enter message';  
    }
  }
 
  timeFormat(date){
    if(date !='undefined'){      
        var d= new Date(date);
        var a = this.datePipe.transform(d,'h:mm a');
        return a;
    }
  }

  dateFormat(date){
    if(date !='undefined'){      
        var d= new Date(date);
        var a = this.datePipe.transform(d,'dd-MM-yyyy');
         return a;
    }
  }

  datemessage(sno,date){
   console.log(sno--,date);
   if(date !='undefined'){      
        var d= new Date(date);
        var a = this.datePipe.transform(d,'dd-MM-yyyy');
         return a;
    }
  }

  private isDifferentDay(messageIndex: number): boolean {
      if (messageIndex === 0) return true;
      const d1 = new Date(this.gruopMessages[messageIndex - 1].created_at);
      const d2 = new Date(this.gruopMessages[messageIndex].created_at);
      return d1.getFullYear() !== d2.getFullYear()
        || d1.getMonth() !== d2.getMonth()
        || d1.getDate() !== d2.getDate();
  }

  private getMessageDate(messageIndex: number): string {
     const wholeDate = new Date(this.gruopMessages[messageIndex].created_at).toDateString();
     this.messageDateString = wholeDate.slice(0, wholeDate.length - 5);
        if(this.messageDateString !='Invalid'){      
         //console.log( this.messageDateString);
             return this.messageDateString;
        }
  }

}