import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform ,Events} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController,LoadingController } from '@ionic/angular'; 
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastController } from '@ionic/angular';
import { FcmService } from './services/fcm-service.service';
 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  navigate : any;
  refferal : any;
  ref_code : any;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingController: LoadingController,
    private fcm: FcmService,
    private socialSharing: SocialSharing,
   
  ) {  
      this.initializeApp();
      this.ref_code = sessionStorage.getItem("ref_code");
      this.refferal = 'http://coliving.kindlebit.com/app.download?rc='+this.ref_code;
      this.sideMenu();
   }

  refertheapp() {
    let durl ='http://coliving.kindlebit.com/app.download?rc='+this.ref_code;
    this.socialSharing.share("Your referal link is:", "Invite", "", durl);
  }

  async logoutLoading() {
    const loading = await this.loadingController.create({
      message: 'Your session has been destroyed!please login again!',
      duration: 3000,
      cssClass: 'custom-class custom-loading1'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();  
  }
  
  autologin() {
    let auth_token = localStorage.getItem("auth_token"); 
    console.log(auth_token); 
    if(auth_token)
      { 
        sessionStorage.setItem("auth_token", localStorage.getItem("auth_token"));
        sessionStorage.setItem("loggedInId", localStorage.getItem("loggedInId"));
        sessionStorage.setItem("loggedInUsername",localStorage.getItem("loggedInUsername"));
        sessionStorage.setItem("roleId", localStorage.getItem("roleId"));
        sessionStorage.setItem("ref_code", localStorage.getItem("ref_code"));
        sessionStorage.setItem("userQuestinaire",localStorage.getItem("userQuestinaire"));
        this.router.navigate(['dashboard']);
      }else
      {
            /*  this.logoutLoading();
                localStorage.clear();
                localStorage.removeItem("auth_token");
                localStorage.removeItem("loggedInId");
                localStorage.removeItem("roleId");
                localStorage.removeItem("loggedInUsername");
                localStorage.removeItem("ref_code");
                localStorage.removeItem("userQuestinaire");
                this.router.navigate(['login']);*/
      } 
  }    

  initializeApp() {
    this.platform.ready().then(() => {   
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.autologin(); 
      this.notificationSetup();  
    });
  }
  
  systemLogout($event){ 
    this.presentLoading();
  }

 
  sideMenu(){
    this.navigate =
    [
      {
        title : "Dashboard",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "Profile",
        url   : "/public-profile",
        icon  : "chatboxes"
      }, 
       {
        title : "Reset Password",
        url   : "/reset-password",
        icon  : "arrow-forward"
      }, 
      {
        title : "Settings",
        url   : "/settings",
        icon  : "hammer"
      }
    ]
  }
 
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Logout Successfull!');
    if(sessionStorage.getItem("auth_token") != undefined)
      { 
        sessionStorage.removeItem("auth_token");
        sessionStorage.removeItem("loggedInId");
        sessionStorage.removeItem("roleId");
        sessionStorage.removeItem("loggedInUsername");
        sessionStorage.removeItem("ref_code");
        sessionStorage.removeItem("userQuestinaire");
        localStorage.clear();
        this.router.navigate(['login']);
      }
  }

  notificationSetup() { 
    let ad = this.fcm.getToken();
    console.log('asdasdsad');
    console.log(ad);
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          
        } else {
         console.log('android');
        }
      });
  }

}
