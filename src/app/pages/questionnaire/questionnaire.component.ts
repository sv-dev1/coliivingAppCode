import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { LoadingController, IonSlides, AlertController, NavController} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, Platform} from '@ionic/angular';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {


  base_url : string = "";
  image_url: string = "";
  currentImage : string =""; 
  question_from: FormGroup;
  submitted = false;
  fagree = false;
  isError : boolean = false;
  isSuccess : boolean = false;
  res:any = [];
  errorsArr:any = []; 
  sucessArr:any = []; 
  assignArr:any = []; 
  fileData :any ;
  ImageObj :any ;
  usersArr:any = []; 
  teamListArr:any = []; 
  userListArr:any = []; 
  userListArrForAssign:any = []; 
  isQuestionareObject :any = []; 
  userDataArr : any = [];
  userQuestionnaire : any = [];
  emptyUserQuestionnaire : any; 
  image_base_url : string = '';
  static: boolean = true;

  
  @ViewChild('slides') slider: IonSlides;

  constructor(
          private router: Router,
          private http: HttpClient,
          public formBuilder: FormBuilder, 
          public itemService: ItemService,
          public alertController: AlertController,
          public loadingController: LoadingController,
          private camera: Camera,
          public popoverController: PopoverController, 
          private actionSheetController: ActionSheetController, 
          private platform: Platform,
          private navCtrl:NavController
      ) {
        this.base_url = environment.base_url;
        this.question_from = this.formBuilder.group({
            partying: new FormControl('', Validators.required),
            smoking: new FormControl('', Validators.required),  
            alcohol: new FormControl('', Validators.required),  
            apartment_clean_importance: new FormControl('', Validators.required),  
            music: new FormControl('', Validators.required),  
            apartment_party: new FormControl('', Validators.required) 
           // social_account: new FormControl(''),  
            //  religion: new FormControl('', Validators.required),  
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
  
  async presentLoadingCustom(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
  
   async presentAlert(message) {
        const alert = await this.alertController.create({
            header: 'Success Message!',
            subHeader: message,
            message: 'Click Okay to redirect to profile page and click Cancel to stay on same page.',
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
                    this.router.navigate(['public-profile']);
                   //console.log('Confirmed Okay');
                }
            }]
        });
        alert.present();
    }
 

  slideOpts = {
    initialSlide: 0,
    speed: 400
  }; 

 mySlideOptions = {
    initialSlide: 0,
    loop: true,
    allowTouchMove: false
  };

  ngOnInit() {
    this.getUserData(); 
  }
   
 

  

  get f() { return this.question_from.controls; }

  async presentPopover() { 
    const popover = await this.popoverController.create({
      component: QuestionnaireComponent,
      componentProps:{teamId:'this.teamId',baseurl: environment.base_url,ref_code:'this.ref_code'},
  //    event: ev,
      translucent: true
    });  

    return await popover.present();
  } 

  registerQuestions(form){
    console.log(form);
    this.submitted = true; 
    if (this.question_from.invalid) {
      return;
    }else{ 
      let token;  
      if(sessionStorage.getItem("auth_token")!=undefined){
        token = sessionStorage.getItem("auth_token"); 
      } 
      
      let userId;  
      if(sessionStorage.getItem("loggedInId")!=undefined){
        userId = sessionStorage.getItem("loggedInId"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
  
     if(this.isQuestionareObject == null || this.isQuestionareObject == '') {

          this.http.post(this.base_url+'user/questionnaire',form,httpOptions).subscribe((response:any) => {
          console.log(response); 
          this.isSuccess = true; 
          this.sucessArr = response;
          this.isError = false; 
          this.loadingController.dismiss().then(a => console.log('dismissed'));
          /*this.presentLoadingCustom(response.message); */
          this.popoverController.dismiss();
          this.presentAlert(response.message);
          this.sucessArr = [] ;
          
         
        },error=>{ 
           console.log(error.error);
        });
      } else if(this.isQuestionareObject != null || this.isQuestionareObject != ''){
           
          this.http.put(this.base_url+'user/'+userId+'/questionnaire',form,httpOptions).subscribe((response:any) => {
          /*console.log(response); */
          this.isSuccess = true; 
          this.sucessArr = response;
          this.isError = false; 
          this.loadingController.dismiss().then(a => console.log('dismissed'));
          this.popoverController.dismiss();
          this.presentAlert(response.message);
          this.sucessArr = [] ;
          
          this.router.navigate(['dashboard']);
         
        },error=>{ 
          console.log("ERROR");
          console.log(error.error);
        });

      }
    }  
  } 

  getUserData(){
    this.image_url = '';
    let token;
    let temp=[];
    let temp1=[];
    if (sessionStorage.getItem("auth_token") != undefined) {
      token = sessionStorage.getItem("auth_token");
    }
    this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.get(this.base_url + 'user/profile', {
      headers: headers
    }).subscribe((response: any) => { 
      this.loadingController.dismiss().then(a => console.log('dismissed'));
      this.userDataArr = response.users[0];
      console.log('this.userDataArr',this.userDataArr.userQuestionnaire );
      if(this.userDataArr.userQuestionnaire != null) {
             this.question_from.patchValue({    
                  partying: this.userDataArr.userQuestionnaire.partying,
                  smoking: this.userDataArr.userQuestionnaire.smoking,  
                  alcohol: this.userDataArr.userQuestionnaire.alcohol,  
                  apartment_clean_importance: this.userDataArr.userQuestionnaire.apartment_clean_importance,  
                  music: this.userDataArr.userQuestionnaire.music,  
                  apartment_party: this.userDataArr.userQuestionnaire.apartment_party, 
            });
      }
      this.isQuestionareObject = this.userDataArr.userQuestionnaire;
      console.log('isQuestionareObject.partying',this.isQuestionareObject);
      this.userQuestionnaire = this.userDataArr.userQuestionnaire;
      this.image_url = this.image_base_url + '' + this.userDataArr.userId;
       /* if(this.userQuestionnaire == undefined || this.userQuestionnaire == null || this.userQuestionnaire == ''){
          this.emptyUserQuestionnaire = true;
          this.presentPopover();   
        }*/
    });   
  }
  next() {
    this.slider.slideNext();
  }

  prev() {
    this.slider.slidePrev();
  }
  
  goToSlide() {
    this.slider.slideTo(2, 500);
  }

  onSlideChanged() {
      let currentIndex = this.slider.getActiveIndex();
      console.log("Current index is", currentIndex);
  }

  close() {
     console.log('fsfsfsdfsf');
     this.popoverController.dismiss();
  }

} 

