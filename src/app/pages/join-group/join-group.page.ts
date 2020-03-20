import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.page.html',
  styleUrls: ['./join-group.page.scss'],
})
export class JoinGroupPage implements OnInit {
   join_teamForm: FormGroup;
   submitted = false;
   user_id : any;
   base_url : string = "";

  constructor(
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public loadingController: LoadingController ,
) { 
      this.base_url = environment.base_url;
      this.join_teamForm = this.formBuilder.group({
      referCode: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
     this.user_id=sessionStorage.getItem("loggedInId")
  }
 get f() { return this.join_teamForm.controls; } 

  
  joinTeam(form){
		console.log(form);
		this.submitted = true;  
	    if (this.join_teamForm.invalid) {
	      return;
	    }
	    else
	    {  
			const input_data = { 
			    "teamId" : form.referCode,
			    "userId" : this.user_id , 
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
	     	    this.router.navigate(['userlist']);
			   },error=>{  
			    console.log("ERROR");
			    console.log(error.error);
			    this.loadingController.dismiss().then(a => console.log('dismissed'));
			      this.customMessageWithLoading(error.error.checkAlreadyExist);
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
	    const { role, data } = await loading.onDidDismiss();
   }  

    async customMessageWithLoading(msg) { 
	    const loading = await this.loadingController.create({
	      message: msg,
	      duration: 2000,
	      cssClass: 'custom-class custom-loading1',
	       spinner:null
	    });
	    await loading.present();
	    const { role, data } = await loading.onDidDismiss();
    
    }

}