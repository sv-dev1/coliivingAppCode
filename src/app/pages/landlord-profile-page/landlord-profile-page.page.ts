import { Component, OnInit,ViewChild } from '@angular/core';
import {LoadingController} from '@ionic/angular'; 
import {environment} from '../../../environments/environment';
import {HttpClient,HttpHeaders,HttpClientModule} from '@angular/common/http'; 
import {FormGroup,FormBuilder,Validators,FormControl,FormArray} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ActionSheetController,Platform} from '@ionic/angular';
import {Camera,CameraOptions,PictureSourceType} from '@ionic-native/camera/ngx';
import { IonContent } from '@ionic/angular';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-landlord-profile-page',
  templateUrl: './landlord-profile-page.page.html',
  styleUrls: ['./landlord-profile-page.page.scss'],
})
export class LandlordProfilePagePage implements OnInit {
       @ViewChild(IonContent) content: IonContent;

    base_url : string = "";
    image_url : string = "";
    userDataArr : any = [];
    loginRoleId: any;
    update_form: FormGroup;
    CountryList = []; 
    image_base_url: string = "";
    selected_country: any = "";
    countriesArr: any = [];
    CountrydropdownSettings = {};
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    CountrySelectedItem :any;
    phoneCodeList = []; 
    phone_code : any ; 
    phoneCodeSelectedItem :any;
    phoneCodedropdownSettings = {};
    maxData : any = (new Date()).getFullYear() + 5;
    ImageObj: any;
    isError: boolean = false;
    isSuccess: boolean = false;
    sucessArr: any = [];
    submitted = false;

  constructor(
       public loadingController: LoadingController,
       private http: HttpClient, 
       public formBuilder: FormBuilder,
       public alertController: AlertController,
       private router: Router,
       private camera: Camera,
       private actionSheetController: ActionSheetController,
       public datepipe: DatePipe
  	) { 
          this.base_url = environment.base_url;
          this.loginRoleId = sessionStorage.getItem("roleId");
          this.image_base_url = environment.image_base_url;
          this.update_form = this.formBuilder.group({
                firstName: new FormControl(''),
                lastName: new FormControl(''),
                email:new FormControl('', Validators.required),
                username:new FormControl(''),
                address: new FormControl('', Validators.required),
                postal_code: new FormControl(''),
                country: new FormControl('', Validators.required),
                phonecode: new FormControl(''),
                phoneNo: new FormControl('', Validators.required),
                dob: new FormControl(''),
                upload_photo: new FormControl(null),
        });

   }

  ngOnInit() {
   
  	this.getUserData();
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
        this.http.get(this.base_url +'user/profile', {
            headers: headers
        }).subscribe((response: any) => { 
            this.loadingController.dismiss().then(a => console.log('dismissed'));
            this.userDataArr = response.users[0];
              if(this.userDataArr.dob =='Invalid date'){
                console.log("true");
                 this.userDataArr.dob="";
             }
             this.update_form.patchValue({
                firstName: this.userDataArr.firstName,
                lastName: this.userDataArr.lastName,
                email:this.userDataArr.email,
                username:this.userDataArr.login.username,
                phoneNo: this.userDataArr.phoneNo,
                postal_code: this.userDataArr.postalCode,
                address: this.userDataArr.address,
                dob: this.datepipe.transform(this.userDataArr.dob, 'yyyy-MM-dd'),   
                upload_photo: this.userDataArr.upload_photo,
            });
               this.selected_country = this.userDataArr.country;
               this.getUserDataCountry();
             
        });     
   }
    get f() {
        return this.update_form.controls;
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
       let obj = [];
            let objPhoneCode = [];
            let objSelected = [];
            let inc = 0;
            let incj = 0;
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

           console.log(this.CountrySelectedItem);
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

    onItemSelect(item: any) {
      console.log(item);
    }

    onSelectAll(items: any) {
        console.log(items);
    }

    onChange(address) {
        this.update_form.patchValue({'address':address.formatted_address});
        console.log(address);
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
    
    register(form) {
        this.submitted = true;
        if (this.update_form.invalid) {
  
              console.log(this.update_form.value);
              console.log("invalid");
              this.content.scrollToTop(400);

            return;
        } else {
          
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
                "habits": form.habits,
                "rental_desc": form.rental_desc,
                "favourite_locations" : form.favourite_locations,

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
            formData.append('dob', input_data.dob);
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
                    this.router.navigate(['/dashboard']);
                    console.log('Confirmed Okay');
                }
            }]
        });
        alert.present();
    }
}
