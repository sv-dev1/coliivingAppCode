import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AlertController,ModalController,LoadingController ,ActionSheetController, Platform} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';  

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- import required BrowserAnimationsModule
import {AccordionModule} from "ngx-accordion";
import {PopoverController} from '@ionic/angular';
@Component({
  selector: 'app-flatemates',
  templateUrl: './flatemates.page.html',
  styleUrls: ['./flatemates.page.scss'],
})
export class FlatematesPage implements OnInit {
  issuesArr = [];
  base_url : string = "";
  teamId : string = "";
  message : string = "";
  sucessArr: any = [];
  isSuccess: boolean = true;
  isError: boolean = false;
  logId:any="";
  constructor( 
    private route: ActivatedRoute,
  	private router: Router,
    private http: HttpClient,
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public popoverController: PopoverController,
    public modalController: ModalController) {
  	this.base_url = environment.base_url;
    this.message ='';
      this.route.queryParams.subscribe(params => { 
      this.teamId = params['teamId'];  
  });  
     }

  ngOnInit() {
    this.logId = sessionStorage.getItem("loggedInId");
  	this.loadIssues();
  }

  loadIssues(){  
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
     console.log(token);
    } 
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.pleaseWait();
 
    this.http.get(this.base_url+'team/issues/'+this.teamId, { headers: headers }).subscribe((response: any) => { 
    this.loadingController.dismiss();
    this.issuesArr = response.issues;   
    console.log(this.issuesArr);
     },error=>{ 
        console.log("ERROR");
        console.log(error.error);
     });  
  }

  async pleaseWait() {
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
  removeIssue(issueId){
      this.confirmDelete(issueId);
  }

  async confirmDelete(id) {
    const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'You really want to delete issue?',
    buttons: [
      {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
        handler: (blah) => {
        console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
          handler: () => {
          this.deleteIssue(id);
          }
        }
    ]
    });
    await alert.present();
  }

  deleteIssue(issueId){
    if (issueId) {
      let token;
      if (sessionStorage.getItem("auth_token") != undefined) {
        token = sessionStorage.getItem("auth_token");
        console.log(token);
      }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        this.http.delete(this.base_url + 'issues/remove/'+issueId ,{headers: headers}).subscribe((response: any) => {
        console.log(response);
        this.isSuccess = true;
        this.sucessArr = response;
        this.isError = false;
        this.loadingController.dismiss().then(a => console.log('dismissed'));
        /*this.presentLoadingCustom(response.message); */
        this.popoverController.dismiss();
        this.presentAlert(response.message);
        this.sucessArr = [];


        }, error => {
        console.log(error.error);
        });
    }
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: ' Message!',
      subHeader: message,
      message: 'Click Okay to redirect to groups bill listing and click Cancel to stay on same page.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirmed Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.router.navigate(['dashboard']);
          //console.log('Confirmed Okay');
        }
      }]
    });
    alert.present();
  }


}
