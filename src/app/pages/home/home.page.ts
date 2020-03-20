import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  login_form: FormGroup;
  submitted = false;
  isError : boolean = false;
  isSuccess : boolean = false;
  res:any = [];
  errorsArr:any = []; 
  sucessArr:any = []; 

  constructor(
    private router: Router,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController
  ){
    this.login_form = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(){ 
  }
 // get f() { return this.loginForm.controls; }
  presentAlert() {
    const alert = this.alertController.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
    });
  }
   
  login(form){
    const input_data = { 
      "username" : form.username,
      "password" : form.password,     
    }  
        this.submitted = true; 
        console.log(input_data); 
        this.itemService.login(input_data).subscribe(response=>{
        console.log(response); 
        if( response['token']){
          sessionStorage.setItem("auth_token", response['token']);
          this.router.navigate(['/dashboard']);  
          this.isSuccess = true;
          this.sucessArr = response;
          this.isError = false;
          this.presentAlert();
        }

        },error=>{ 
        this.isError = true;
        console.log("ERROR");
        console.log(error.error);
        this.errorsArr = error.error;
        }); 
   //   }
 
  }
 
}
