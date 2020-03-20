import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute,  Params} from '@angular/router';
import { environment} from '../../../environments/environment';
import { HttpClient,  HttpHeaders,  HttpClientModule} from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.page.html',
  styleUrls: ['./property-detail.page.scss'],
})
export class PropertyDetailPage implements OnInit {
  propertyId:any="";
  base_url : string = "";
  propertyInfo:any;
  image_url:string ="";
  image_base_url : string = "";
  showProperty:boolean=true;
  roleId:any;
  teamId:any;
  showResult:boolean=false;
  constructor(
      private route: ActivatedRoute,
      private http: HttpClient, 
      public loadingController: LoadingController,
 	) { 
    this.route.queryParams.subscribe(params => {
      this.propertyId = params['propertyId'];
      this.teamId = params['teamId'];

    });
        this.base_url = environment.base_url;
        this.image_base_url = environment.image_base_url;  
        this.roleId=sessionStorage.getItem("roleId");
    }

  ngOnInit() {
      if(this.roleId == 3){
          this.showProperty=false;
      }

      if(this.propertyId != undefined){
           this.getPropertyInfo();
           this.showResult=true;
      }
  }

   getPropertyInfo(){
      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
      token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      let temp=[];

      let headers = new HttpHeaders();
      headers = headers.set('Authorization', token);
      this.http.get(this.base_url+'propertydetails/'+this.propertyId, { headers: headers }).subscribe((response: any) => {
          if(response['requests'] != undefined){
              this.propertyInfo=response['requests'][0];
          }
          this.image_url = this.image_base_url+''+this.propertyInfo.propertyId;

         console.log(this.propertyInfo);
      },error=>{ 
      console.log("ERROR");
      console.log(error.error);
      }); 
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

}
