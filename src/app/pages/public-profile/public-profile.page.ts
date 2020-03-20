import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input ,NgZone} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {FormGroup,FormBuilder,Validators,FormControl,FormArray} from '@angular/forms';
import {ItemService} from '../../services/item.service';
import {ActionSheetController,Platform,LoadingController,AlertController,IonContent} from '@ionic/angular'; 
import {environment} from '../../../environments/environment';
import {HttpClient,HttpHeaders,HttpClientModule} from '@angular/common/http'; 
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { PopoverController } from '@ionic/angular'; 
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import {Camera,CameraOptions,PictureSourceType} from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-public-profile',
    templateUrl: './public-profile.page.html',
    styleUrls: ['./public-profile.page.scss'],
})
export class PublicProfilePage implements OnInit {
    base_url : string = "";
    image_base_url : string = "";
    image_url : string = "";
    res : any = [];
    errorsArr : any = [];
    sucessArr : any = [];
    userDataArr : any = [];
    countriesArr : any = [];
    languageArr : any = [];
    userQuestionnaire : any;
    countryId : any;
    countryName : any;
    nationalityId : any = [];
    nationalityName : any = [];
    languagesId : any = [];
    languagesName:any = [];
    language1 : any;
    language2 : any;
    nationality1 : any;
    nationality2 : any;
    emptyUserQuestionnaire:boolean = false;
    IsUserTanent:boolean = false;
    ImageObj: any;

    @ViewChild(IonContent) content: IonContent;

    constructor(    
        private clipboard: Clipboard,
        private router: Router,
        private route: ActivatedRoute, 
        public popoverController: PopoverController,  
        private http: HttpClient, 
        public itemService: ItemService,
        public alertController: AlertController,
        private actionSheetController: ActionSheetController,
        private camera: Camera,
        public loadingController: LoadingController)
    {
        this.base_url = environment.base_url;
        this.image_base_url = environment.image_base_url;  
    }

    ngOnInit() {
       
        if(sessionStorage.getItem("roleId") === '4'){
            this.IsUserTanent=true;
        }
         this.getUserData(); 
    }
   
    remove(){
        console.log("removePic");
        let token; 
        if(sessionStorage.getItem("auth_token")!=undefined){
          token = sessionStorage.getItem("auth_token"); 
        }  
         const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
         return this.http.delete(this.base_url+'user/removepic',httpOptions).subscribe((response: any) => { 
             console.log(response);
                this.loadingController.dismiss().then(a => console.log('dismissed'));
                this.presentAlert(response.message);
         }); 
    }

    async presentAlert(msg) {
        const alert = await this.alertController.create({
            header: 'Success Message!',
            message: msg,
            buttons: [{
                text: 'Okay',
                handler: () => {
                    this.router.navigate(['dashboard']);
                    console.log('Confirmed Okay');
                }
            }]
        });
        alert.present();
    }

    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: "Select Image source",
            buttons: [{
                    text: 'Load from Library',
                    handler: () => {
                        this.captureImage(true);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.captureImage(false);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }

    async captureImage(useAlbum: boolean) {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            ...useAlbum ? {
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
            } : {}
        }

        const imageData = await this.camera.getPicture(options);

        this.image_url = `data:image/jpeg;base64,${imageData}`; 
        var contentType = 'image/jpeg'
        var realData = imageData;
        this.ImageObj = this.b64toBlob(realData, contentType); 
          const formData = new FormData();
           formData.append('photo', this.ImageObj);
            let token;  
            if (sessionStorage.getItem("auth_token") != undefined) {
                token = sessionStorage.getItem("auth_token");
            }
            this.presentLoading();
            console.log(formData);
            const httpOptions = {
                headers: new HttpHeaders({
                    'authorization': token
                })
            };
            this.http.post(this.base_url + 'user/uploadpic', formData, httpOptions).subscribe(response => {
                console.log(response);
                this.loadingController.dismiss().then(a => console.log('dismissed'));
               this.presentAlert("Profile Pic uploaded Successfully");
               }, error => {
                console.log("ERROR");
                console.log(error.error);
            });
    }
 
    b64toBlob(b64Data, contentType) {
        contentType = contentType || '';
        let sliceSize = 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
 
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
    }
 
    setimage(){
        this.image_url='assets/images/user_dummy.png';
        console.log(this.image_url);
    }

    doRefresh(event) { 
        setTimeout(() => {
            this.getUserData(); //do any things
            event.target.complete();
        }, 500);
    }
    
    async presentPopover() { 
        const popover = await this.popoverController.create({
            component: QuestionnaireComponent,
            componentProps:{teamId:'this.teamId',baseurl: environment.base_url,ref_code:'this.ref_code'},
            //    event: ev,
            translucent: true
        });  

        return await popover.present();
    } 

    copyText(event) {
        this.clipboard.copy('Hello world');
        //    console.log(this.clipboard.paste());
    }
    resubmitQuestionare() {
        this.presentPopover();
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
            console.log('userdata', this.userDataArr);
            this.countryId=this.userDataArr.country;
            temp1 = response.users[0].nationality.split(",");
            this.nationalityId.push(temp1);
            temp = response.users[0].languages.split(",");
            this.languagesId.push(temp);
            this.getCountries();
            this.getLanguages();
            // console.log(this.languagesId);
            this.userQuestionnaire = this.userDataArr.userQuestionnaire;
            this.image_url = this.image_base_url+''+this.userDataArr.userId;
            console.log('image_base_url',this.image_base_url);
            console.log('this.image_url', this.image_url);
            if((this.userQuestionnaire == undefined || this.userQuestionnaire == null || this.userQuestionnaire == '') && this.IsUserTanent == true){
                this.emptyUserQuestionnaire = true;
                this.presentPopover();   
            }
        }, error => {
            if(error.error == "Unauthorized" && error.status == 401){
                console.log("true");
                this.expiredMessage('Session Expired.You must login again!');
            }
        });     
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
            for (let order of this.countriesArr) {
                if(order.id == this.countryId){
                    this.countryName=order.name;
                }
            }
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
    deleteImage(){

    }
}
