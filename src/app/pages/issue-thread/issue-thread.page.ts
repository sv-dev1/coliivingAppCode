import { Component, OnInit,ViewChild } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AlertController,ModalController,LoadingController ,ActionSheetController, Platform} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';  
import { IonContent} from '@ionic/angular'; //,ActionSheetController, Platform
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import {AccordionModule} from "ngx-accordion";

@Component({
  selector: 'app-issue-thread',
  templateUrl: './issue-thread.page.html',
  styleUrls: ['./issue-thread.page.scss'],
})
export class IssueThreadPage implements OnInit {
	@ViewChild(IonContent) content: IonContent;

gruopMessages = [];
issuesArr = [];
base_url : string = "";
message : string = "";
issueId : string = "";
userId : string = "";

constructor( 
  	private router: Router,
  	private route: ActivatedRoute,
    private http: HttpClient,
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
	public modalController: ModalController) 
	{
		this.base_url = environment.base_url;
		this.userId = sessionStorage.getItem("loggedInId");  
		this.route.queryParams.subscribe(params => { 
		this.issueId = params['issueId'];  
  	});
		this.getUserData();
	}

	ionViewDidEnter(){
		this.ScrollToBottom();
	}

/***************scroll down******************/

  ScrollToBottom(){
    this.content.scrollToBottom(1500);
  }
/***************scroll down******************/
  ngOnInit() {
  }
  doRefresh(event) { 
        setTimeout(() => {
          this.getUserData(); //do any things
          event.target.complete();
        }, 500);
  }
  getUserData(){
        let token;  
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        } 
        let postArr = {
						'issueId' : this.issueId
       				 };  
		    let headers = new HttpHeaders();
		    headers = headers.set('Authorization', token);
		    this.http.post(this.base_url+'issues/thread',postArr, { headers: headers }).subscribe((response: any) => {
   		//	console.log(response.issues); 
        	this.gruopMessages = response.issues;
        }); 	
	}
  sendMessage(){
  	let input_data={
  		'userId': this.userId,
  		'message': this.message,
  		'issueId':this.issueId,
  		'status': '0',
  		'createdAt': new Date() 
  	};
  	this.gruopMessages.push(input_data);  
  	this.ScrollToBottom();
    let token; 
    if (sessionStorage.getItem("auth_token") != undefined) {
        token = sessionStorage.getItem("auth_token");
    }   
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.post(this.base_url+'issues/thread/addreply',input_data, { headers: headers }).subscribe((response: any) => {
	   console.log(response.messages); 
	//this.gruopMessages = response.messages; 
    }); 

  this.message =''; 
  console.log(this.gruopMessages);
  }

}
