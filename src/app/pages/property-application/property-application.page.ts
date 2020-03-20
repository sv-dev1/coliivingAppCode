import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { LoadingController } from '@ionic/angular';
import { Platform,NavController,AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-property-application',
  templateUrl: './property-application.page.html',
  styleUrls: ['./property-application.page.scss'],
})
export class PropertyApplicationPage implements OnInit {
  teamId:any;
  requestArr:any=[];
  base_url : string = "";
  submitted:boolean=false;
  noProperty:boolean=false;
  constructor(  
      private route: ActivatedRoute,
      private http: HttpClient, 
      public loadingController: LoadingController,
      public alertController: AlertController,
      ) {
      this.route.queryParams.subscribe(params => { 
        this.teamId = params['teamId'];
      });  
        this.base_url = environment.base_url;
    }

  ngOnInit() {
    this.getPropertyListing();
  }

  propertyInfo(data){
    console.log(data);
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

  getPropertyListing(){
    this.requestArr=[];
      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
      token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      let temp=[];

      let headers = new HttpHeaders();
      headers = headers.set('Authorization', token);
      this.http.get(this.base_url+'property/invitation/'+this.teamId, { headers: headers }).subscribe((response: any) => {
         if(response.requestData=='Request accepted already!!!!!!'){
             this.noProperty=true;
         }
         else{
           response.requestData.forEach(obj => {
              if(obj.status == 'Pending'){
                  if(obj.property !=null){
                      this.requestArr.push(obj);
                  }
              }
            });
        }
      },error=>{ 
       // console.log("ERROR");
      //console.log(error.error);
      }); 
  }
  
  onChange(info,id){
    console.log(info,id);
    this.presentAlertConfirm(info,id);
      
  }

  async customsmessage(msg) { 
    const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      cssClass: 'custom-class custom-loading1',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
      this.getPropertyListing();

  }

  async presentAlertConfirm(info,id) {
      const alert = await this.alertController.create({
      header: 'Confirmed!',
      message: 'Are you sure you want to '+ info + ' this property invitation?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
          this.submitted = true; 
      
                const input_data = 
                { 
                    "status" : info,
                    "team_id":this.teamId
                }   
                let token; 
                if(sessionStorage.getItem("auth_token")!=undefined){
                   token = sessionStorage.getItem("auth_token"); 
                }
                console.log(input_data);
              //  this.presentLoading();
                const httpOptions = { headers: new HttpHeaders({'authorization': token })};
                this.http.post(this.base_url+'/property/status/'+id,input_data,httpOptions).subscribe((response:any) => {
                 console.log(response);
                this.customsmessage("Updated Succesfully");
                },error=>{  
                   console.log(error.error); 
                });  
            }
        }
       ]
      });
      await alert.present();
  }

}
