import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { ActionSheetController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-add-member-to-team',
  templateUrl: './add-member-to-team.page.html',
  styleUrls: ['./add-member-to-team.page.scss'],
})
export class AddMemberToTeamPage implements OnInit {
teamId :any;
usersArr :any;
dataArr :any;
items :any;
base_url : string = "";
isItemAvailable = false;
private  bookList: any[];
private  bookFilteredList: any[];

constructor(
  private route: ActivatedRoute,   
  private http: HttpClient, 
	public itemService: ItemService,
	public alertController: AlertController,
  public loadingController: LoadingController ,
) { 
  this.isItemAvailable = false;
  this.base_url = environment.base_url;
  this.route.queryParams.subscribe(params => {
  console.log(params);
  this.teamId = params['teamId'];
    })

}

  ngOnInit() {
  	this.getUsersList();
  } 

  getUsersList(){
    console.log('All users gets list out under this function');

    let token; 
    if(sessionStorage.getItem("auth_token") != undefined){
     token = sessionStorage.getItem("auth_token"); 
    } 
    this.presentLoading();
    //const httpOptions = { headers: new HttpHeaders({'authorization': token })};
    console.log(token);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);

    this.http.get(this.base_url+'users', { headers: headers }).subscribe((response: any) => {
        this.usersArr = response.users; 
        this.dataArr = response.users;  
           this.loadingController.dismiss().then(a => console.log('dismissed'));
    },error=>{ 
        console.log("ERROR");
        console.log(error.error);
        this.loadingController.dismiss().then(a => console.log('dismissed'));
    });     
  }

  filter(ev:any){
    console.log('Excecute filter');
    let val = ev.target.value;  
    if(val){ //item.toLowerCase().indexOf(val.toLowerCase()) > -1
      this.bookFilteredList = this.usersArr.filter((book: any) => book.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1  ||  book.phoneNo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      this.bookList = this.bookFilteredList;
      console.log(this.bookFilteredList);
      this.dataArr = this.bookFilteredList;
    }else{
      console.log("working in else"); 
      this.dataArr = this.usersArr; 
    }
  }

async addToTeam(user:any){ 
  this.addMemberToTeam(user); 
}

async presentLoading() { 
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
}

async customMessageWithLoading(Message) { 
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: Message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Cancelled');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay: Okay');
          }
        }
      ]
    });
    await alert.present();
  } 

goForAdd(user:any){
console.log(user);
  const input_data = { 
          "teamId" : this.teamId,
          "userId" : user.userId , 
        } 
  let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
       token = sessionStorage.getItem("auth_token"); 
      }
  this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.post(this.base_url+'team/user',input_data, { headers: headers }).subscribe((response: any) => { 
        console.log(response);
        this.loadingController.dismiss().then(a => console.log('dismissed'));
        this.customMessageWithLoading(response.message);
     },error=>{  
      console.log("ERROR");
      console.log(error);
      console.log(error.error);
      this.loadingController.dismiss().then(a => console.log('dismissed'));
      this.customMessageWithLoading(error.error.checkAlreadyExist);
     }); 
}

async addMemberToTeam(user:any) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you <strong>sure</strong>!!! To add this user to current team.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: Cancelled');
          }
        }, {
          text: 'Okay',
          handler: () => {
             this.goForAdd(user);
          }
        }
      ]
    });

    await alert.present();
  }

}
