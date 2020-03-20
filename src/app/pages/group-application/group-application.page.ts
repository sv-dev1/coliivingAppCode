import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { LoadingController } from '@ionic/angular';
@Component({
	selector: 'app-group-application',
	templateUrl: './group-application.page.html',
	styleUrls: ['./group-application.page.scss'],
})
export class GroupApplicationPage implements OnInit {
userListArr:any=[];
base_url : string = "";
teamId : string = "";
logRefCode : string = "";
userRecord:any =[];
  constructor(
      private route: ActivatedRoute,
      private http: HttpClient, 
      public loadingController: LoadingController,
  ) { 
    this.base_url = environment.base_url;

  this.route.queryParams.subscribe(params => { 
      this.teamId = params['teamId']; 
  });  
  }

  ngOnInit() {
    this.getUsersList();
    this.logRefCode=sessionStorage.getItem("ref_code");
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
  userInfo(info){
     console.log(info);
  }
  getUsersList() : void {
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
    token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    const httpOptions = { headers: new HttpHeaders({'authorization': token })};
    let temp=[];

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.get(this.base_url+'team/applications/'+this.teamId, { headers: headers }).subscribe((response: any) => {
    this.userListArr = response.teams;
    //console.log(this.userListArr);
    this.userListArr.forEach(ele=> {
      if(ele.userProfile){
        if(ele.userProfile.used_code == this.logRefCode){
             this.userRecord.push(ele);
        }
      }
      console.log(this.userRecord);

    })

    },error=>{ 
    console.log("ERROR");
    console.log(error.error);
    }); 
  }


}