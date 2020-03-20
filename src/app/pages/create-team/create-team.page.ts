import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {
base_url : string = "";
team_form: FormGroup;
submitted = false;
fagree = false;
isError : boolean = false;
isSuccess : boolean = false;
res:any = [];
errorsArr:any = []; 
sucessArr:any = []; 
assignArr:any = []; 
fileData :any ;
usersArr:any = []; 
teamArr:any=[]; 
teamListArr:any=[];
noUser:boolean=false;
userName:any;
constructor(
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController , 
	) { 
  
	 this.base_url = environment.base_url;
      this.team_form = this.formBuilder.group({
      name: new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z0-9? ]+$')]),
      users: new FormControl(''), 
    });
}

  ngOnInit() {
    this.getTeamsList();
    this.userName= sessionStorage.getItem("loggedInUsername");
  }

  getTeamsList(){
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.get(this.base_url+'getTeam', { headers: headers }).subscribe((response: any) => {
        this.teamListArr = response.teams; 

       this.teamListArr.forEach(obj =>{
           this.teamArr.push(obj.teamId);
        });
              console.log(this.teamArr);
                if(this.teamArr.length !=0){
                   this.onTeamSelection(this.teamArr);
                }
                else{
                  this.noUser=true;
                }
     },error=>{ 
        console.log(error.error);
        if(error.error == 'Unauthorized')
        {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
     });     
  }
  
  onTeamSelection(checkedVal){ 
    let postArr = {'teamId': checkedVal};
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
         token = sessionStorage.getItem("auth_token"); 
    }  
    this.presentLoading();
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
    this.http.post(this.base_url+'team/users',postArr,httpOptions).subscribe((response: any) =>
         {   
          let teamData=response.teams;
            teamData.forEach(obj =>{
                if (!this.usersArr.find(o => o.userId === obj.userId))
                  { 
                      this.usersArr.push(obj);
                      console.log(obj.login.username);
                  }
              });

        },error=>{ 
            console.log("ERROR");
            console.log(error);
            if(error.error == "Unauthorized" && error.status == 401){
                  console.log("true");
                  this.expiredMessage('Session Expired.You must login again!');
              }
        });

    console.log("Checkbox Checked");
  }

  pushToAssignArr(value) { 
  	console.log(value); 
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


  get f() { return this.team_form.controls; } 

  async presentAlert(messageC) {
      const alert = await this.alertController.create({
        header: 'Success Message!',
        subHeader: messageC,
        message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
        buttons:[ {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirmed Cancel: Cancelled');
            }
          }, {
            text: 'Okay',
            handler: () => {
              this.router.navigate(['userlist']);
              console.log('Confirmed Okay');
            }
          }]
      }); 
      alert.present(); 
  }

  registerTeam(form){ 
    this.submitted = true;
    console.log(this.team_form);  
    if (this.team_form.invalid) {
      return;
    }else{  
    	const input_data = { 
	      	"name" : form.name, 
	      	"userId" : form.users,
      	} 
    console.log(input_data); 
    let resArr :any;
     this.itemService.create_team(input_data).subscribe((response: any) =>{
      console.log(response);
      this.team_form.reset();
      this.presentAlert(response.message);
      },error =>{
        console.log(error);
        }) ;
     //console.log(JSON.stringify(resArr, undefined, 2));
    }
  }

  async expiredMessage(msg) {
      const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      cssClass: 'custom-class custom-loading1',
      spinner:null
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
      console.log('Logout Successfull!');
      if(sessionStorage.getItem("auth_token") != undefined)
      {
       sessionStorage.removeItem("auth_token");
          sessionStorage.removeItem("loggedInUsername");
          sessionStorage.removeItem("userQuestinaire");
          sessionStorage.removeItem("ref_code");
          sessionStorage.removeItem("loggedInId");
          sessionStorage.removeItem("roleId");
          localStorage.removeItem("auth_token");
          localStorage.removeItem("loggedInUsername");
          localStorage.removeItem("userQuestinaire");
          localStorage.removeItem("ref_code");
          localStorage.removeItem("loggedInId");
          localStorage.removeItem("roleId");

          this.router.navigate(['login']);
      }
    }

   
  isDisabled(userName: any):boolean{
      //console.log(this.userName.includes(userName));
      return this.userName.includes(userName); // note, i'm not certain if this should just be occupation.
  }
}
