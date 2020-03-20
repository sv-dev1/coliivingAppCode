import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { NavController,AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { FcmService } from '../services/fcm-service.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
//import * as JWT from 'jwt-decode';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 login_form: FormGroup;
  submitted = false;
  isError : boolean = false;
  isSuccess : boolean = false;
  res:any = [];
  errorsArr:any = []; 
  sucessArr:any = []; 
  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };  constructor(
    private storage: Storage,
    private router: Router,
    public navCtrl: NavController,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public menuCtrl: MenuController,
    private fcm: FcmService,
    private googlePlus: GooglePlus,
    public afAuth: AngularFireAuth,private fb: Facebook

  ){ 
    this.checkUserForAlreadyLoggedIn();
   // this.menuCtrl.enable(false);
    this.login_form = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
    });  

     fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === 'connect') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
  }
    checkUserForAlreadyLoggedIn() { 
      
  }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
     }
     ionViewDidLeave() {
        this.menuCtrl.enable(true);
     } 
  ngOnInit(){
    if(sessionStorage.getItem("auth_token") != undefined)
    {  
      this.router.navigate(['dashboard']);
    } 
  } 
 get f() { return this.login_form.controls; } 
 async pleaseWait() {
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null

    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Login successfully!!!... Now you are redirected to dashboard.',
      duration: 1000,
      cssClass: 'custom-class custom-loading1',
      spinner:null

    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Login successfully!!!'); 
    this.router.navigate(['/dashboard']);  
    //this.close();
  }  

  login(form)
  {
    this.submitted = true; 
    if (this.login_form.invalid) {
      console.log('invalid');
      return;
    }
    else{
      const input_data = 
      { 
      "username" : form.username,
      "password" : form.password,
      "token"    : localStorage.getItem("device_token")    
      }

      console.log(input_data); 
      this.pleaseWait();
      this.itemService.login(input_data).subscribe(response=>{
      this.loadingController.dismiss().then(a => console.log('dismissed'));
        if(response['token'])
        {
          this.storage.set('login', input_data);  
          sessionStorage.setItem("auth_token", response['token']);
          sessionStorage.setItem("loggedInId", response['userId']);
          sessionStorage.setItem("loggedInUsername", response['username']);
          sessionStorage.setItem("roleId", response['roleId']);
          sessionStorage.setItem("ref_code", response['ref_code']);
          sessionStorage.setItem("userQuestinaire", response['userQuestinaire']);
          localStorage.setItem("auth_token", response['token']);
          localStorage.setItem("loggedInId", response['userId']);
          localStorage.setItem("loggedInUsername", response['username']);
          localStorage.setItem("roleId", response['roleId']);
          localStorage.setItem("ref_code", response['ref_code']);
          localStorage.setItem("userQuestinaire", response['userQuestinaire']);
          this.isSuccess = true;
          this.sucessArr = response;
          this.isError = false;  
          this.presentLoading();
        }
      },error=>{ 
      this.isError = true;
      console.log("ERROR");
      console.log(error);
      this.errorsArr = error.error;
      console.log(this.errorsArr);
      });  
    }
  }
  googleLogin() {
   console.log('googleLogin');
      this.googlePlus.login({
        'scopes': 'profile',
        'webClientId': '215704000060-cc8r1qrgtt5b7gig1eig7ci8252t1b05.apps.googleusercontent.com',
        'offline': true
          }).then((res) => {
            this.pleaseWait();
          console.log('good');
          console.log(res);
          firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
              .then( success => {
                  console.log("Firebase success: " + JSON.stringify(success.additionalUserInfo));
                  if(success.user.emailVerified == true){
                         console.log(success.additionalUserInfo['profile']['given_name']);
                           const input_data = 
                            { 
                              "email" : success.user.email,
                              "username" : success.additionalUserInfo['profile']['given_name']+success.additionalUserInfo['profile']['family_name'],
                              "password" : success['additionalUserInfo']['profile']['given_name']+"@123",     
                              "password2" : success['additionalUserInfo']['profile']['given_name']+"@123",     
                              "roleId" : 4,    
                              "goole_login": "true"    
 
                            }
                            console.log(input_data); 
                             this.pleaseWait();

                            this.itemService.register(input_data).subscribe(response=>{
                              this.loadingController.dismiss().then(a => console.log('dismissed')); 
                                const login_data = 
                                  { 
                                    "username" : success.additionalUserInfo['profile']['given_name']+success.additionalUserInfo['profile']['family_name'],
                                    "goole_login"    : "true"    
                                  }
                                    console.log(login_data); 
                                    this.pleaseWait();

                                    this.itemService.loginwithfb(login_data).subscribe(response=>{
                                    this.loadingController.dismiss().then(a => console.log('dismissed'));
                                    console.log(response); 
                                       if(response['token'])
                                          {
                                            this.storage.set('login', login_data);  
                                            sessionStorage.setItem("auth_token", response['token']);
                                            sessionStorage.setItem("loggedInId", response['userId']);
                                            sessionStorage.setItem("loggedInUsername", response['username']);
                                            sessionStorage.setItem("roleId", response['roleId']);
                                            sessionStorage.setItem("ref_code", response['ref_code']);
                                            sessionStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                            localStorage.setItem("auth_token", response['token']);
                                            localStorage.setItem("loggedInId", response['userId']);
                                            localStorage.setItem("loggedInUsername", response['username']);
                                            localStorage.setItem("roleId", response['roleId']);
                                            localStorage.setItem("ref_code", response['ref_code']);
                                            localStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                            this.isSuccess = true;
                                            this.sucessArr = response;
                                            this.isError = false;  
                                            this.preLoading("You are directing to dashboard Page");
                                          }
                                    },error=>{ 
                                          console.log("Login ERROR");
                                          console.log(error);
                                    });                              },error=>{ 
                              this.isError = true;
                              console.log(error.error.email);
                              if(error.error['email']=='This email is already linked with an existing user' || error.error['username'] == 'This username already exists'){
                                  console.log("login pls");
                                  const login_data = 
                                  { 
                                    "username" : success.additionalUserInfo['profile']['given_name']+success.additionalUserInfo['profile']['family_name'],
                                    "goole_login"    : "true"    
                                  }
                                    console.log(login_data); 
                                    this.itemService.loginwithfb(login_data).subscribe(response=>{
                                    this.loadingController.dismiss().then(a => console.log('dismissed'));
                                    console.log(response); 
                                       if(response['token'])
                                          {
                                            this.storage.set('login', login_data);  
                                            sessionStorage.setItem("auth_token", response['token']);
                                            sessionStorage.setItem("loggedInId", response['userId']);
                                            sessionStorage.setItem("loggedInUsername", response['username']);
                                            sessionStorage.setItem("roleId", response['roleId']);
                                            sessionStorage.setItem("ref_code", response['ref_code']);
                                            sessionStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                            localStorage.setItem("auth_token", response['token']);
                                            localStorage.setItem("loggedInId", response['userId']);
                                            localStorage.setItem("loggedInUsername", response['username']);
                                            localStorage.setItem("roleId", response['roleId']);
                                            localStorage.setItem("ref_code", response['ref_code']);
                                            localStorage.setItem("userQuestinaire", response['userQuestinaire']);
                                            this.isSuccess = true;
                                            this.sucessArr = response;
                                            this.isError = false;  
                                            this.preLoading("You are directing to dashboard Page");
                                          }
                                    },error=>{ 
                                          console.log("Login ERROR");
                                          console.log(error);
                                    });  
                              } 
                            });  
                  }
              })
              .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
              },(err) => {
                  console.log('Firebase error');
                  console.log("NEw=>",err);
              });
  }
  
  async preLoading(msg) {
      const loading = await this.loadingController.create({
        message: msg,
        duration: 4000,
        cssClass: 'custom-class custom-loading1',
        spinner:null

      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
      this.router.navigate(['/dashboard']);  
  }

 fbLogin() {
  this.fb.login(['email'])
    .then(res => {
      if (res.status === 'connected') {
        this.isLoggedIn = true;
        this.getUserDetail(res.authResponse.userID);
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
}

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }

}




