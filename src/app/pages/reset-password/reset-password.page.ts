import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormBuilder,  Validators,FormControl} from '@angular/forms';
import {  Router,  ActivatedRoute,  Params} from '@angular/router';
import {  AlertController} from '@ionic/angular';
import {  LoadingController} from '@ionic/angular';
import {  HttpClient,  HttpHeaders,  HttpClientModule} from '@angular/common/http';
import {  environment} from '../../../environments/environment';
import { ItemService } from '../../services/item.service';
import { MustMatch } from '../../helpers/must-match.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
   reset_pass: FormGroup;
   base_url: string = "";
   submitted:boolean=false;
   isError : boolean = false;
   errorsArr:any = []; 
   userId:any;
  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private http: HttpClient,
    private router:Router,
    public itemService: ItemService,

  	) { 
     this.reset_pass = this.formBuilder.group({
      cuPass: new FormControl('',Validators.required),
      pwd: new FormControl('',[Validators.required,Validators.minLength(6)]),
      confPwd: new FormControl('',[Validators.required,Validators.minLength(6)]),

    }, {
        validator: MustMatch('pwd', 'confPwd')
     });
      this.base_url = environment.base_url;

  }

  ngOnInit() {
      this.userId = sessionStorage.getItem("loggedInId");
  }
  get f() {
    return this.reset_pass.controls;
  }

  reset(){
    this.submitted=true;
      if(this.reset_pass.invalid){
        return;
      }
      else{
          const input = {  
            "password": this.reset_pass.value.cuPass, 
            "newPassword": this.reset_pass.value.pwd,                
            "newPassword2": this.reset_pass.value.confPwd,
          } 
      
          console.log(input); 
           this.itemService.changePassword(input).subscribe((response:any)=> { 
               this.presentAlert(response['message']);
             //  console.log(response);

            },error =>{
              this.isError=true;
              console.log(error.error);
              this.errorsArr=error.error;
            });
                  
      }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const {
      role,
      data
    } = await loading.onDidDismiss();
  }

   async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: "Done!",
      message: message,
      buttons: [{
        text: 'Okay',
        handler: () => {
          console.log('Confirmed Okay');
          this.router.navigate(['dashboard']);
        }
      }]
    });
    alert.present();
  }
  
}
