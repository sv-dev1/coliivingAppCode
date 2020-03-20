import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input ,NgZone,Renderer2 } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormBuilder,Validators,FormControl,FormArray} from '@angular/forms';
import {ItemService} from '../../services/item.service';
import {AlertController} from '@ionic/angular';
import {LoadingController} from '@ionic/angular';
import {environment} from '../../../environments/environment';
import {HttpClient,HttpHeaders,HttpClientModule} from '@angular/common/http';
import {ActionSheetController,Platform} from '@ionic/angular';
import {Camera,CameraOptions,PictureSourceType} from '@ionic-native/camera/ngx';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {GooglePlaceDirective} from "../../ngx-google-places-autocomplete.directive";
import {ComponentRestrictions} from "../../objects/options/componentRestrictions";
import {Address} from "../../objects/address";
import {AddressComponent} from "../../objects/addressComponent";
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { IonContent } from '@ionic/angular';
import { DatePipe } from '@angular/common'

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.page.html',
    styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
   @ViewChild(IonContent) content: IonContent;
    dropdownList = [];
    dropdownLists = [];
    selectedItems :any;
    dropdownSettings = {};
    LanguageList = []; 
    LanguageSelectedItems :any;
    LanguagedropdownSettings = {};
    CountryList = []; 
    CountrySelectedItem :any;
    CountrydropdownSettings = {};
    phoneCodeList = []; 
    phone_code : any ; 
    phoneCodeSelectedItem :any;
    phoneCodedropdownSettings = {};
    loginRoleId: any;
    base_url: string = "";
    image_base_url: string = "";
    image_url: string = "";
    email: string = "";
    update_form: FormGroup;
    submitted = false;
    fagree = false;
    isError: boolean = false;
    isSuccess: boolean = false;
    res: any = [];
    selected_country: string = "";
    errorsArr: any = [];
    sucessArr: any = [];
    assignArr: any = [];
    countriesArr: any = [];
    languageArr: any = [];
    fileData: any;
    ImageObj: any;
    teamListArr: any = [];
    nationality_one: any;
    nationality_two: any;
    language_one: any;
    send_country: any;
    language_two: any;
    tempNltyArr: any = [];
    tempLangArr: any = [];
    sendNltyArr: any = []; 
    sendLangArr: any = [];
    userDataArr: any = [];
    myFiles:string = "";

    maxData : any = (new Date()).getFullYear() + 5;


    constructor(
        private router: Router,
        private http: HttpClient,
        public formBuilder: FormBuilder,
        public itemService: ItemService,
        public alertController: AlertController,
        public loadingController: LoadingController,
        private camera: Camera,
        private actionSheetController: ActionSheetController,
        public datepipe: DatePipe,
        private renderer: Renderer2
    ) {
        this.base_url = environment.base_url;
        this.loginRoleId = sessionStorage.getItem("roleId");
        this.image_base_url = environment.image_base_url;
        this.update_form = this.formBuilder.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
             email:new FormControl('', Validators.required),
             username:new FormControl('', Validators.required),
            phoneNo: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            postal_code: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required),
            work_place: new FormControl(''),
            previous_city: new FormControl(''),
            dob: new FormControl(''),
            occuptation: new FormControl(''),
            wakeup_time: new FormControl(''),
            weekend_wakup_time: new FormControl(''),
            interestes: new FormControl(''),
            biography: new FormControl(''),
            habits: new FormControl(''),
            nationality: new FormControl(),
            favourite_locations: new FormControl(),
            gender: new FormControl(''),
            stay_date: new FormControl(''),
            rental_desc: new FormControl(''),
            languages: new FormControl(''),
            stay_date_start: new FormControl(''),
            stay_date_end: new FormControl(''),
            min_range: new FormControl(''),
            max_range: new FormControl(''),
            social_account:new FormControl(''),
        });

    } 

    ngOnInit() {
        
        this.getUserData();
        setTimeout(() => {
            this.getUserDataCountry();
        }, 2000)
    }

    ionViewDidLoad(){
         this.getUserData();
         this.getUserDataCountry();
    } 

    onChange(address) {
        this.update_form.patchValue({'address':address.formatted_address});
        console.log(address);
    }

   
    onItemSelect(item: any) {  
        this.sendNltyArr.push((item.item_id).toString());
        console.log(this.sendNltyArr);
    } 

    OnNationalityDeSelect(item: any) {  
       this.sendNltyArr.splice(this.sendNltyArr.indexOf((item.item_id).toString()),1);
        console.log(this.sendNltyArr);
    }  

    onSelectAll(items: any) {
        console.log(items);
    }
 
    onItemSelectLang(item: any) {  
        this.sendLangArr.push((item.item_id).toString());
        console.log(this.sendLangArr);
    } 

    OnDeSelectLang(item: any) {  
       this.sendLangArr.splice(this.sendLangArr.indexOf((item.item_id).toString()),1);
        console.log(this.sendLangArr);
    }
 
    compareFn(optionOne, optionTwo): boolean {
        return optionOne.id === optionTwo.id;
    }

    setSelectedChange(event) {
        console.log(event);
        this.selected_country = event.id;
    }

    getUserDataCountry() {
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);

        this.http.get(this.base_url + 'countries', {
            headers: headers
        }).subscribe((response: any) => {
            this.countriesArr = response.countries;

            //  console.log(this.countriesArr);
            let obj = [];
            let objPhoneCode = [];
            let objSelected = [];
            let inc = 0;
            let incj = 0;
       //     console.log(this.nationality_one);
      //      console.log(this.nationality_two);


            this.countriesArr.forEach(ele => { 

                if (this.phone_code == ele['phonecode']) {
                  this.phoneCodeSelectedItem = [{
                        item_id: ele['phonecode'],
                        item_text: ele['name'] +'('+ele['iso3']+')'
                    }]; 
                }    

                if (this.selected_country == ele['id']) {
                  this.CountrySelectedItem = [{
                        item_id: ele['id'],
                        item_text: ele['name']
                    }]; 
                }   

               if (this.nationality_one == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
                }       
                if (this.nationality_two == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                      incj++;
                }

                obj[inc] = {
                    item_id: ele['id'],
                    item_text: ele['name']
                };

                objPhoneCode[inc] = {
                    item_id: ele['phonecode'],
                    item_text: ele['name']+'('+ele['iso3']+')'
                };
                inc++;
            }); 

         //   console.log(this.CountrySelectedItem);
         //   console.log(this.phoneCodeSelectedItem);

            this.dropdownList = obj; 
            this.CountryList = obj; 
            this.phoneCodeList = objPhoneCode; 
            this.selectedItems = objSelected; 
            this.dropdownSettings = {
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                limitSelection:2
            };
            this.CountrydropdownSettings = {
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                singleSelection: true, 
            };  
            this.phoneCodedropdownSettings = {
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                singleSelection: true, 
            }; 

        })
    }

    async getUserData() {
        this.image_url = '';
        let token;
        if (sessionStorage.getItem("auth_token") != undefined) {
            token = sessionStorage.getItem("auth_token");
        }
        this.presentLoading();
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);

        this.http.get(this.base_url + 'languages', {
            headers: headers
        }).subscribe((response: any) => {
            this.languageArr = response.languages;
        }, error => {
               if(error.error == "Unauthorized" && error.status == 401){
                console.log("true");
                this.expiredMessage('Session Expired.You must login again!');
            }
        }) 

        this.http.get(this.base_url + 'user/profile', {
            headers: headers
        }).subscribe((response: any) => {
            this.userDataArr = response.users[0];
           // console.log(this.userDataArr);
            let tempNationality = this.userDataArr.nationality;
            let templanguages = this.userDataArr.languages;
            let ttempNltyArr = tempNationality.split(",");
            let ttempLangArr = templanguages.split(",");
            //console.log(ttempNltyArr);
            if (ttempNltyArr) {
                var xNationalty = ttempNltyArr[0];
                var zNationalty = ttempNltyArr[1];
                this.nationality_one = +xNationalty;
                this.nationality_two = +zNationalty;
                this.tempNltyArr.push(this.countriesArr[this.nationality_one]); // = [,];
                this.tempNltyArr.push(this.countriesArr[this.nationality_two]);

            }

            if (ttempLangArr) {
                var xlan = ttempLangArr[0];
                var zlan = ttempLangArr[1];
                var ylan = +xlan;
                var qlan = +zlan;
                var index;
              for (index = 0; index < ttempLangArr.length; ++index) {
                this.tempLangArr.push(ttempLangArr[index].toString());  
              }
            }  


              let inc = 0; 
              let incj = 0; 
              let obj = [];
               let objSelected = [];
              this.languageArr.forEach(ele => {  

               if (this.tempLangArr[0] == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
                }  
                if (this.tempLangArr[1] == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
                }    
                if (this.tempLangArr[2] == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
                }    
                if (this.tempLangArr[3] == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
                }    
                if (this.tempLangArr[4] == ele['id']) {
                    objSelected[incj] = {
                        item_id: ele['id'],
                        item_text: ele['name']
                    };
                    incj++;
                }        

                obj[inc] = {
                    item_id: ele['id'],
                    item_text: ele['name']
                };
                inc++;
            });

            this.LanguageList = obj; 
            this.LanguageSelectedItems = objSelected; 

            this.LanguagedropdownSettings = {
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                limitSelection:5,
                singleSelection: false, 
            };


            let phoneNoArr: any = [];
            let stay_dateArr: any = [];
            let pricerange: any = [];
            if (this.userDataArr.phoneNo)
            {
                phoneNoArr = this.userDataArr.phoneNo.split(' ');
                this.phone_code = phoneNoArr[0]; 
            }


            if (this.userDataArr.stay_date)
                stay_dateArr = this.userDataArr.stay_date.split(' - ');
            if (this.userDataArr.price_range)
                pricerange = this.userDataArr.price_range.split('-');

            if (this.userDataArr.nationality)
                 this.sendNltyArr =  this.userDataArr.nationality.split(',');

            if (this.userDataArr.nationality)
                 this.sendLangArr =  this.userDataArr.languages.split(',');
            if(this.userDataArr.dob !="Invalid date"){
                 let latest_date =this.datepipe.transform(this.userDataArr.dob, 'yyyy-MM-dd');
                  this.userDataArr.dob=latest_date;
            }
 
            this.update_form.patchValue({
                firstName: this.userDataArr.firstName,
                lastName: this.userDataArr.lastName,
                email:this.userDataArr.email,
                username:this.userDataArr.login.username,
                phoneNo: this.userDataArr.phoneNo,
                postal_code: this.userDataArr.postalCode,
                address: this.userDataArr.address,
                work_place: this.userDataArr.work_place,
                previous_city: this.userDataArr.previous_city,
                 occuptation: this.userDataArr.occuptation_tt,
                 dob:this.userDataArr.dob,
                wakeup_time: this.userDataArr.wakeup_time,
                weekend_wakup_time: this.userDataArr.weekend_wakup_time,
                interestes: this.userDataArr.interestes,
                biography: this.userDataArr.biography,
                stay_date: this.userDataArr.stay_date,
                stay_date_start: stay_dateArr[0] ? stay_dateArr[0] : "",
                stay_date_end: stay_dateArr[1] ? stay_dateArr[1] : "",
                gender: this.userDataArr.gender,
                habits: this.userDataArr.habits,
                favourite_locations: this.userDataArr.favourite_location,
                min_range: pricerange[0] ? pricerange[0] : "",
                max_range: pricerange[1] ? pricerange[1] : "", 
                rental_desc: this.userDataArr.rental_desc,
                social_account:this.userDataArr.social_account,
                country:"",
                nationality:"",
                languages:"",

            });
            console.log(this.update_form.value);
            this.image_url = this.image_base_url + '' + this.userDataArr.userId;
            let fileName=this.image_base_url + '' + 'documents/'+ this.userDataArr.userId;
            this.email = this.userDataArr.email;
            this.selected_country = this.userDataArr.country;
            this.loadingController.dismiss().then(a => console.log('dismissed'));
           console.log(this.myFiles);
        }, error => {
           // console.log("ERROR");
           // console.log(error.error);
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

    async presentAlert(msg) {
        const alert = await this.alertController.create({
            header: 'Message!',
            subHeader: msg,
            message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
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
                    console.log('Confirmed Okay');
                }
            }]
        });
        alert.present();
    }
     
    get f() {
        return this.update_form.controls;
    }

    fileProgress(event) {
        this.fileData = event.target.files[0];
        console.log(this.fileData);
    }

    register(form) {
        this.submitted = true;
        if (this.update_form.invalid) {
  
              console.log(this.update_form.value);
              console.log("invalid");
              this.content.scrollToTop(400);
               return;
        } else {
            console.log(form.country);
            console.log('nationality' + form.nationality);
            console.log('languages' + form.languages);
       
            const input_data = {
                "firstName": form.firstName,
                "lastName": form.lastName,
                "phoneNo": form.phoneNo,
                "address": form.address,
                "username": form.username,
                "email": form.email,
                "postal_code": form.postal_code,
                "country": form.country[0].item_id,
                "work_place": form.work_place,
                "previous_city": form.previous_city,
                "dob": form.dob,
                "occuptation": form.occuptation,
                "wakeup_time": form.wakeup_time,
                "weekend_wakup_time": form.weekend_wakup_time,
                "interestes": form.interestes,
                "stay_date": form.stay_date,
                "price_range": form.min_range + '-' + form.max_range,
                "stay_date_start": form.stay_date_start,
                "stay_date_end": form.stay_date_end,
                "languages": this.sendLangArr,
                "biography": form.biography,
                "nationality": this.sendNltyArr, //[form.nationality[0].id,form.nationality[1].id], 
                "gender": form.gender,
                "habits": form.habits,
                "rental_desc": form.rental_desc,
                "favourite_locations" : form.favourite_locations,
                "social_account": form.social_account,

            }

            console.log(input_data);
            const formData = new FormData();
            formData.append('firstName', input_data.firstName);
            formData.append('lastName', input_data.lastName);
            formData.append('phoneNo', input_data.phoneNo);
            formData.append('address', input_data.address);
            formData.append('email', input_data.email);
            formData.append('username', input_data.username);
            formData.append('postal_code', input_data.postal_code);
            formData.append('country', input_data.country);
            formData.append('previous_city', input_data.previous_city);
            formData.append('occuptation_tt', input_data.occuptation);
            formData.append('wakeup_time', input_data.wakeup_time);
            formData.append('weekend_wakup_time', input_data.weekend_wakup_time);
            formData.append('interestes', input_data.interestes);
            formData.append('biography', input_data.biography);
            formData.append('nationality', input_data.nationality);
            formData.append('languages', input_data.languages);
            formData.append('gender', input_data.gender);
            formData.append('dob', this.datepipe.transform(input_data.dob, 'yyyy-MM-dd'));
            formData.append('stay_date', input_data.stay_date_start + " - " + input_data.stay_date_end);
            formData.append('price_range', input_data.price_range);
            formData.append('work_place', input_data.work_place);
            formData.append('habits', input_data.habits);
            formData.append('rental_desc', input_data.rental_desc);
            formData.append('favourite_locations', input_data.favourite_locations);
            formData.append('social_account',input_data.social_account);
            formData.append('photo', this.ImageObj);
            // formData.append('documents', this.files);

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
            this.http.put(this.base_url + 'user/profile', formData, httpOptions).subscribe(response => {
                console.log(response);
              //  let msgResponse=response['message'];
                this.isSuccess = true;
                this.sucessArr = response;
                this.isError = false;
                this.loadingController.dismiss().then(a => console.log('dismissed'));
                this.presentAlert(response['message']);
                this.sucessArr = [];
            }, error => {
                console.log("ERROR");
                console.log(error.error);
            });
        }
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



    changeListener(event){
        // console.log(event.target.files);
        this.myFiles = event.target.files[0].name;
        console.log(this.myFiles);
        const formData = new FormData();
        formData.append('document', event.target.files[0]);
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
        this.http.post(this.base_url + 'user/documents', formData, httpOptions).subscribe(response => {
            console.log(response);
            this.addedMessage();
            this.loadingController.dismiss().then(a => console.log('dismissed'));

            }, error => {
            console.log("ERROR");
            console.log(error.error);
        });

    }
     async addedMessage() {
      const loading = await this.loadingController.create({
      message: "Document added",
      duration: 3000,
      cssClass: 'custom-class custom-loading1',
      spinner:null
      });
      await loading.present();

    }

}