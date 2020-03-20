import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController, NavController} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { ActionSheetController, Platform} from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-house-chores',
  templateUrl: './house-chores.page.html',
  styleUrls: ['./house-chores.page.scss'],
})
export class HouseChoresPage implements OnInit {
  base_url : string = ""; 
  tasksListArr :any = [];
  userListArr :any = [];
  presentDate:any;
  constructor(
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController ,
    private navCtrl:NavController,
    public popoverController: PopoverController, 
    public datepipe: DatePipe
    ) {
    this.base_url = environment.base_url;
    this.getTeamsList();
   }

  ngOnInit() {
    //this.getTeamsList();
    let latest_date =new Date();
    this.presentDate=this.datepipe.transform(latest_date, 'yyyy-MM-dd');
    console.log(this.presentDate);
  }
  ionViewWillEnter() {
    //this.getTeamsList(); 
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

  getTeamsList() : void {
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.tasksListArr=[];
    this.http.get(this.base_url+'tasks', { headers: headers }).subscribe((response: any) => {

             response.tasks.forEach(obj =>{
                if(obj['task.task_name'] != null){
                   this.tasksListArr.push(obj);
                }
              });
              console.log(this.tasksListArr);
            this.loadingController.dismiss().then(a => console.log('dismissed'));
     },error=>{ 
        console.log("ERROR");
        console.log(error.error);
         this.loadingController.dismiss().then(a => console.log('dismissed'));
     });     
  }

  removeItem(taskArr){ 
        this.confirmDelete(taskArr);
  }

  async confirmDelete(taskArr) {
    const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'You really want to delete task?',
    buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
      console.log('Confirm Cancel: blah');
      }
      }, {
        text: 'Okay',
        handler: () => {
        this.deleteTask(taskArr);
        }
    }
    ]
    });

    await alert.present();
  }

  deleteTask(taskArr){
     console.log(taskArr);
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
      token = sessionStorage.getItem("auth_token"); 
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    let taskId = taskArr.taskId;

    this.http.delete(this.base_url+'task/'+taskId, { headers: headers }).subscribe((response: any) => {
           console.log(response); 
          
          this.loadingController.dismiss().then(a => console.log('dismissed'));
          /*this.presentLoadingCustom(response.message); */
          this.popoverController.dismiss();
          this.presentAlert(response.message);
         
     },error=>{ 
        console.log("ERROR");
        console.log(error.error);
     });  
  }
   async presentAlert(message) {
        const alert = await this.alertController.create({
            header: 'Success Message!',
            subHeader: message,
            message: 'Click Okay to redirect to Dashboard and click Cancel to stay on same page.',
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('Confirmed Cancel: blah');
                }
            }, {
                text: 'Okay',
                handler: () => {
                    this.router.navigate(['dashboard']);
                   //console.log('Confirmed Okay');
                }
            }]
        });
        alert.present();
    }
}
