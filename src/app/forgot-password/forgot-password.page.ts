import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ItemService } from '../services/item.service';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
 
 login_form: FormGroup;
  submitted = false;
  isError : boolean = false;
  isSuccess : boolean = false;
  res:any = [];
  errorsArr:any = []; 
  sucessArr:any = []; 

  constructor(
  	private http: HttpClient,
    private router: Router,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController
      ){  

    this.login_form = this.formBuilder.group({
    username: new FormControl('', Validators.required), 
    });  
  }

  ngOnInit(){ 
  } 
  get f() { return this.login_form.controls; }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'please wait...',
      duration: 2000,
      cssClass: 'custom-class custom-loading1',
      spinner:null

    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  //  console.log('Forgot password successfully!!!'); 
  }

 login(form) 
  {
    this.submitted = true;
    if (this.login_form.invalid) {
      console.log('invalid');
      return;
    }
    else
    {
        const input_data = 
        { 
         "email" : form.username,    
        }  
        this.presentLoading();
        console.log(input_data); 
        this.itemService.fpassword(input_data).subscribe(response=>{
          console.log(response);  
          this.loadingController.dismiss().then(a => console.log('dismissed'));
          this.presentAlert();
       },error=>{
          console.log("ERROR");
          this.isError=true;
          this.errorsArr=error.error.errors;
          console.log(this.errorsArr.username);
         }); 
      }  
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: "Done!",
      message: 'Email sent successfully!!! Please check your email.',
      buttons:[{
          text: 'Okay',
          handler: () => { 
            console.log('Confirmed Okay');
          }
        }]
    }); 
    alert.present(); 
  }
 
}
