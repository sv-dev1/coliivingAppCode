import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { LoadingController} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';   
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-application-detail',
  templateUrl: './user-application-detail.page.html',
  styleUrls: ['./user-application-detail.page.scss'],
})

export class UserApplicationDetailPage implements OnInit {
  userId:any;
  base_url : string = "";
  queData : any;
  noData:boolean=false;
  teamId:any;
  isQuestionareObject: any;
  image_url : string = "";
  image_base_url : string = "";
  languagesId : any = [];
  languagesName:any = [];
  language1 : any;
  language2 : any;
  nationality1 : any;
  nationality2 : any;
  nationalityId : any = [];
  nationalityName : any = [];
  countriesArr : any = [];
  languageArr : any = [];
  constructor(
       private router: ActivatedRoute,
       private route: Router,
       public loadingController: LoadingController,
       private http: HttpClient, 
       public alertController: AlertController,
  ) { 
       this.router.queryParams.subscribe(params => {
         this.userId = params['userId'];
         this.teamId = params['teamId'];
       })
       this.base_url = environment.base_url;
       this.image_base_url = environment.image_base_url;  

  }

  ngOnInit() {
     console.log(this.userId);
     this.getQuestionaire();
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

  getQuestionaire(){
      let token; 
       let temp=[];
        let temp1=[];
        let temp2=[];
      if(sessionStorage.getItem("auth_token")!=undefined){
       token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      let headers = new HttpHeaders();
     // this.userId="Ue3b66e39-1599-4047-bc5c-8fb97c776aa0";
      headers = headers.set('Authorization', token);
      this.http.get(this.base_url+'user/'+this.userId+'/questionnaire', { headers: headers }).subscribe((response: any) => {
          
          this.isQuestionareObject = response.questionnaireData[0];
          console.log('sddsadsadsadsadsa', this.isQuestionareObject);
          this.image_url = this.image_base_url+''+this.isQuestionareObject.userId;
            temp2= this.isQuestionareObject.userProfile.price_range.split("-");
            temp1 =  this.isQuestionareObject.userProfile.nationality.split(",");
            this.nationalityId.push(temp1);
            temp =  this.isQuestionareObject.userProfile.languages.split(",");
            this.languagesId.push(temp);
            this.getLanguages();
                        this.getCountries();

       },error=>{ 
          console.log("ERROR");
          console.log(error.error);
      });     
  }
  response(data,status){
     const input_data = { 
          "team_id" : this.teamId, 
          "user_id" : this.userId,
          "user_status" : status,
        } 
     // console.log(input_data); 
            const formData = new FormData();
            formData.append('team_id', input_data.team_id);
            formData.append('user_id', input_data.user_id);    
            formData.append('user_status', input_data.user_status);
            let token; 
          if(sessionStorage.getItem("auth_token")!=undefined){
             token = sessionStorage.getItem("auth_token"); 
          }

            this.presentLoading();
            const httpOptions = { headers: new HttpHeaders({'authorization': token })};
            this.http.post(this.base_url+'team/update_applications', input_data, httpOptions).subscribe((response:any) => {
            console.log(response); 
             this.loadingController.dismiss().then(a =>   console.log('dismissed'));
             this.presentAlert(response.message); 
          
             },error=>{ 
                console.log("ERROR");
                console.log(error.error);
             });   

  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: "Done!",
      message: message,
      buttons:[{
          text: 'Okay',
          handler: () => { 
            console.log('Confirmed Okay');
            this.route.navigate(['group-detail-page']);
          }
        }]
    }); 
    alert.present(); 
  }
   getLanguages(){
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        this.http.get(this.base_url + 'languages', {
            headers: headers
        }).subscribe((response: any) => {
            this.languageArr = response.languages;
            this.languagesId.forEach(element => {
                this.languagesName=[];
                element.forEach(item => { 
                    for (let order of this.languageArr) {
                        if(order.id == item){
                            this.languagesName.push(order.name);
                        }
                    }
                });
            });
            // console.log(this.languagesName[0]);
            this.language1 = this.languagesName[0];
            this.language2 = this.languagesName[1];
        });    
    }
     getCountries(){
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);

        this.http.get(this.base_url + 'countries', {
            headers: headers
        }).subscribe((response: any) => {
            this.countriesArr=response.countries;
           
            this.nationalityId.forEach(element => {
                this.nationalityName=[];
                element.forEach(item => { 
                    for (let order of this.countriesArr) {
                        if(order.id == item){
                            this.nationalityName.push(order.name);
                        }
                    }
                });
            });
            this.nationality1 = this.nationalityName[0];
            this.nationality2 = this.nationalityName[1];
        });
    }
  
}