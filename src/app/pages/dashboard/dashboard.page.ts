import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Navbar } from 'ionic-angular'; 
import { Platform,NavController,AlertController } from '@ionic/angular'; 
import { App } from 'ionic-angular'; 
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HttpClient,HttpHeaders,HttpClientModule} from '@angular/common/http'; 
import { LoadingController} from '@ionic/angular'; 
import { environment} from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild(Navbar) navBar: Navbar;
  base_url : string = "";
  loginData : any;
  roleId = '';

  constructor(
    private router:Router,
    private platform: Platform, 
    public navCtrl: NavController,
    public alertController: AlertController,
    private http: HttpClient, 
    public loadingController: LoadingController
  ) {
    this.roleId = sessionStorage.getItem("roleId");
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.presentAlertConfirm();
    });  
    this.base_url = environment.base_url;
  }

  async presentAlertConfirm() {
      const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'You want to go back!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Dashboard',
          handler: () => {
          this.router.navigate(['dashboard']);
          }
        }
       ]
      });
      await alert.present();
  }

   
ngAfterViewInit() {
//	 let currentPage = this.app.getActiveNav().getViews()[0].name; 
	}
ionViewWillEnter() {
   this.roleId = sessionStorage.getItem("roleId");
}


  ngOnInit() {
    this.roleId = sessionStorage.getItem("roleId");  
    this.getUserData();
  } 

  getUserData(){
   
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'user/profile', {
            headers: headers
        }).subscribe((response: any) => { 
             console.log(response);           
        },error=>{ 
            console.log("ERROR");
            console.log(error);
           if(error.error == "Unauthorized" && error.status == 401){
              this.expiredMessage('Session Expired.You must login again!');
           }
       });     
    }

    async expiredMessage(msg) {
      const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      cssClass: 'custom-class custom-loading1',
       spinner:null
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
      console.log('Logout Successfull!');
      if(sessionStorage.getItem("auth_token") != undefined)
      {
          sessionStorage.removeItem("auth_token");
          sessionStorage.removeItem("loggedInUsername");
          sessionStorage.removeItem("userQuestinaire");
          sessionStorage.removeItem("ref_code");
          sessionStorage.removeItem("loggedInId");
          sessionStorage.removeItem("roleId");
          localStorage.removeItem("auth_token");
          localStorage.removeItem("loggedInUsername");
          localStorage.removeItem("userQuestinaire");
          localStorage.removeItem("ref_code");
          localStorage.removeItem("loggedInId");
          localStorage.removeItem("roleId");
          this.router.navigate(['login']);
      }
    }

    async presentLoading() {
      const loading = await this.loadingController.create({
          cssClass:'custom-class custom-loading',
          duration: 2000,
          spinner:null
       });
        await loading.present();
        const {
            role,
            data
        } = await loading.onDidDismiss();
    }

}
 