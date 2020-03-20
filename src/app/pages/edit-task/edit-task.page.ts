import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormBuilder,  Validators,FormControl} from '@angular/forms';
import {  Router,  ActivatedRoute,  Params} from '@angular/router';
import {  AlertController} from '@ionic/angular';
import {  LoadingController} from '@ionic/angular';
import {  HttpClient,  HttpHeaders,  HttpClientModule} from '@angular/common/http';
import {  environment} from '../../../environments/environment';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
   task_form: FormGroup;
   taskId: any;
   taskArr: any;
   base_url: string = "";

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private http: HttpClient,
    private router:Router

  	) { 
    this.task_form = this.formBuilder.group({
      task_name: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9]+[a-zA-Z0-9 ]+")]),
      status: new FormControl('',Validators.required),
      notes: new FormControl(''),
    });
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.taskId = params['taskId'];
    })
    this.base_url = environment.base_url;


  }

	ngOnInit() {
	   this.getSuggestionList();
	}

	get f() {
	    return this.task_form.controls;
	}

	editTask(){
	      	console.log(this.task_form.value);
	      	if(this.task_form.invalid){
	            return;
	      	}
	      	else{
	      		const input_data = {
			      "task_name": this.task_form.value.task_name,
			      "status": this.task_form.value.status,
			      "notes": this.task_form.value.notes,
			    }
			    const formData = new FormData();
			      formData.append('task_name', input_data.task_name);
			      formData.append('status', input_data.status);
			      formData.append('notes', input_data.notes);
			   let token;
			    if (sessionStorage.getItem("auth_token") != undefined) {
			      token = sessionStorage.getItem("auth_token");
			    }
			    this.presentLoading();
			      const httpOptions = {
				        headers: new HttpHeaders({
				          'authorization': token
				        })
				      }; 
			    this.http.post(this.base_url + 'editTask/' + this.taskId , formData,httpOptions).subscribe((response: any) => {
			     
			              this.presentAlert(response.message);

			      this.loadingController.dismiss().then(a => console.log('dismissed'));
			    }, error => {
			      //console.log("ERROR");
			      //console.log(error.error);
			      this.loadingController.dismiss().then(a => console.log('dismissed'));
			    });
	      	}
	}

    getSuggestionList(): void {
	    let token;
	    if (sessionStorage.getItem("auth_token") != undefined) {
	      token = sessionStorage.getItem("auth_token");
	    }
	    this.presentLoading();
	    let headers = new HttpHeaders();
	    headers = headers.set('Authorization', token);
	    this.http.get(this.base_url + 'task/' + this.taskId + '/suggestion', {
	      headers: headers
	    }).subscribe((response: any) => {
	      this.taskArr = response.suggestionList.taskArr;
	       this.task_form = this.formBuilder.group({
		      task_name:this.taskArr.task_name,
		      status:this.taskArr.status,
		      notes: this.taskArr.notes,
		   });
	      console.log('this.taskForm',this.task_form.value);
	      this.loadingController.dismiss().then(a => console.log('dismissed'));
	    }, error => {
	      //console.log("ERROR");
	      //console.log(error.error);
	      this.loadingController.dismiss().then(a => console.log('dismissed'));
	    });
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

    async presentAlert(messageC) {
	    const alert = await this.alertController.create({
	      header: 'Success Message!',
	      subHeader: messageC,
	      message: 'Click Okay to redirect to Go Back and click Cancel to stay on same page.',
	      buttons: [{
	        text: 'Cancel',
	        role: 'cancel',
	        cssClass: 'secondary',
	        handler: (blah) => {
	          console.log('Confirmed Cancel: Cancelled');
	        }
	      }, {
	        text: 'Okay',
	        handler: () => {
               this.router.navigate(['/teams'])
	          console.log('Confirmed Okay');
	        }
	      }]
	    });
	    alert.present();
    }

}
