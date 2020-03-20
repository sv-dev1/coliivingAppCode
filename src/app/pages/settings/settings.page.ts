import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  base_url : string = "";
  setting_form: FormGroup;
  submitted = false;
  errorsArr:any = []; 
  sucessArr:any = []; 
  settingsArr:any = []; 
  isError : boolean = false;
  isSuccess : boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder, 
    public alertController: AlertController,
    public loadingController: LoadingController ,
  ) {
  	  this.base_url = environment.base_url; 
      this.setting_form = this.formBuilder.group({
       notification: new FormControl('1'),
       b_notification: new FormControl('1'),
       cm_notification: new FormControl('1'),
       g_notification: new FormControl('1'),
     	 hcs_notification: new FormControl('1'),
     });
      this.getUserData();
   }

  ngOnInit() { 
  }

  redirectheapp(durl) { 
    window.open(durl, '_self');
  }

  getUserData(){
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading('');
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'user/profile', {
            headers: headers
        }).subscribe((response: any) => { 
        this.loadingController.dismiss().then(a => console.log('dismissed'));
          console.log(response);
          this.settingsArr = response.users[0].setting;  
          this.setting_form.patchValue({'notification':this.settingsArr.notification});
          this.setting_form.patchValue({'b_notification':this.settingsArr.b_notification});
          this.setting_form.patchValue({'cm_notification':this.settingsArr.cm_notification});
          this.setting_form.patchValue({'g_notification':this.settingsArr.g_notification});
          this.setting_form.patchValue({'hcs_notification':this.settingsArr.hcs_notification});
        });
	}

  submit(){ 
    	this.submitted = true;
      if(this.setting_form.value.notification == true)
        this.setting_form.value.notification = "1"; 
        else
        this.setting_form.value.notification = "0";

        if(this.setting_form.value.b_notification == true)
        this.setting_form.value.b_notification = "1"; 
        else
        this.setting_form.value.b_notification = "0"; 
     
        if(this.setting_form.value.cm_notification == true)
        this.setting_form.value.cm_notification = "1"; 
        else
        this.setting_form.value.cm_notification = "0"; 
       
        if(this.setting_form.value.g_notification == true)
        this.setting_form.value.g_notification = "1"; 
        else
        this.setting_form.value.g_notification = "0"; 
          
        if(this.setting_form.value.hcs_notification == true)
  			this.setting_form.value.hcs_notification = "1"; 
  			else
  			this.setting_form.value.hcs_notification = "0"; 
   
			const input_data = {
        'notification':this.setting_form.value.notification,
        'b_notification':this.setting_form.value.b_notification,
        'cm_notification':this.setting_form.value.cm_notification,
        'g_notification':this.setting_form.value.g_notification,
				'hcs_notification':this.setting_form.value.hcs_notification,
			}; 
				let token;  
					if(sessionStorage.getItem("auth_token")!=undefined){
						token = sessionStorage.getItem("auth_token"); 
					} 
					this.presentLoading('Please wait....');
					const httpOptions = { headers: new HttpHeaders({'authorization': token })}; 
					this.http.post(this.base_url+'user/settings',input_data,httpOptions).subscribe((response:any) => {
				    	console.log(response); 
				    	this.isSuccess = true; 
				    	this.sucessArr = response;
				    	this.isError = false;
						this.loadingController.dismiss(); 
						this.presentLoading(response.message); 
						this.sucessArr = [] ;
				       },error=>{ 
				        	console.log("ERROR");
				        	//console.log(error.error);
				    });  
	} 

 async presentLoading(msg) { 
 	 if(msg == '')
 	  msg = 'Please wait...';
    const loading = await this.loadingController.create({
      message: msg,
      duration: 2000,
      cssClass: 'custom-class custom-loading1'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
}