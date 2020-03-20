import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { AlertController } from '@ionic/angular'; 
import { LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 register_form: FormGroup;
  submitted = false;
  fagree = false;
  isError : boolean = false;
  isSuccess : boolean = false;
  res:any = [];
  errorsArr:any = []; 
  sucessArr:any = []; 

  constructor(
    private router: Router,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public menuCtrl: MenuController
  ){
    this.register_form = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      agree: ['false', Validators.requiredTrue]
    }, {
            validator: MustMatch('password', 'confirm_password')
        });

  }
     /* ionViewWillEnter() {
        this.menuCtrl.enable(false);
     }
     ionViewDidLeave() {
        this.menuCtrl.enable(true);
     } */
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'User register successfully.',
      message: 'Now you are redirected to dashboard.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 4000,
      cssClass: 'custom-class custom-loading1'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss(); 
    this.router.navigate(['/login']);  
  }

  ngOnInit(){  
  }
  
  get f() { return this.register_form.controls; } 

  async pleaseWait() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 10000,
      cssClass: 'custom-class custom-loading1'
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  register(form){   
    this.submitted = true;  
    console.log(this.register_form.controls);
    if (this.register_form.invalid) {  
      return;
    }else{  
      const input_data = 
      { 
      "email" : form.email,
      "username" : form.username,
      "password" : form.password,     
      "password2" : form.confirm_password,     
      "roleId" : form.roleId,     
      }
      console.log(input_data); 
         this.pleaseWait();
          this.itemService.register(input_data).subscribe(response=>{
          this.loadingController.dismiss().then(a => console.log('dismissed')); 
          this.presentLoading(response['message']);
         // this.register_form.reset();
  
      },error=>{ 
      this.isError = true;
      console.log("ERROR");
      console.log(error.error);
      this.errorsArr = error.error;
      });  
    }
  }
}
