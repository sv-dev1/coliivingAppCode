import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input ,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { ActionSheetController, Platform} from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {GooglePlaceDirective} from "../../ngx-google-places-autocomplete.directive";
import {ComponentRestrictions} from "../../objects/options/componentRestrictions";
import {Address} from "../../objects/address";
import {AddressComponent} from "../../objects/addressComponent";
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.page.html',
  styleUrls: ['./add-property.page.scss'],
})
export class AddPropertyPage implements OnInit {
   @ViewChild("placesRef") placesRef : GooglePlaceDirective;
   @ViewChild(IonContent) content: IonContent;

  image_url : string = "";
  base_url : string = "";
  property_form: FormGroup;
  submitted = false;
  fagree = false;
  isError : boolean = false;
  isSuccess : boolean = false;
  masterCheck : boolean = false;
  res:any = [];
  errorsArr:any = []; 
  sucessArr:any = []; 
  assignArr:any = []; 
  fileData :any ; 
  ImageObj :any ; 
  teamListArr :any = [];
  userListArr :any = [];
  currentImage : string = "";
  currentImageWithoutCode : string = "";

  constructor(
  	private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController ,
    private camera: Camera,
    private file: File,
    private webview: WebView, 
    private actionSheetController: ActionSheetController, 
    private platform: Platform, 
    private filePath: FilePath,
    private sanitizer: DomSanitizer,
    ) { 
	this.base_url = environment.base_url;
  	this.property_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      property_type: new FormControl('', Validators.required),
      floor_space: new FormControl('', Validators.required),
      no_of_balconies: new FormControl('', Validators.required),
      no_of_bedrooms: new FormControl('', Validators.required),
      no_of_kitchens: new FormControl('', Validators.required),
      no_of_bathrooms: new FormControl('', Validators.required),
      no_of_garages: new FormControl('', Validators.required),
      property_desc: new FormControl('', Validators.required),
      pets_allowed: new FormControl('', Validators.required),
      no_of_parking_space: new FormControl('', Validators.required),
    	status: new FormControl('', Validators.required),
      photo: new FormControl(''), 
    	});

  }

  ngOnInit() {
  }

  get f() { return this.property_form.controls; } 

 fileProgress(event) {
    this.fileData = event.target.files[0];   
    console.log(this.fileData);
  } 

  public onChange(address) {
      this.property_form.patchValue({'city':address.formatted_address});
      console.log(address);
  }
  pushToAssignArr(value){ 
	this.assignArr.push(value);
	console.log(this.assignArr);
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

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
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
            console.log('Confirm 8448488487');
          }
        }
      ]
    });

    await alert.present();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: 'Property added successfully!!!',
      message: 'Click Okay to redirect to property listing page and click Cancel to stay on same page.',
      buttons:[ {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmed Cancel: blah');
            this.property_form.reset();
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['property-listing']);
            console.log('Confirmed Okay');
             this.router.navigate(['dashboard']);
          }
        }]
    }); 
    alert.present(); 
  }

  register(form){ 
   // console.log('input_data');
    this.submitted = true;  
    if (this.property_form.invalid) {
        this.content.scrollToTop(200);

      return;
    }else{    
    	const input_data = { 
          "name" : form.name,
	      	"city" : form.city,
	      	"floor_space" : form.floor_space,
	      	"no_of_balconies" : form.no_of_balconies,
          "no_of_bedrooms" : form.no_of_bedrooms,
          "no_of_bathrooms" : form.no_of_bathrooms,
          "no_of_kitchens" : form.no_of_kitchens,
          "property_desc" : form.property_desc,
          "pets_allowed" : form.pets_allowed,
          "property_type" : form.property_type,
          "status" : form.status,
	      	"no_of_parking_space" : form.no_of_parking_space,
      	}

      console.log(input_data);
	    const formData = new FormData();
      formData.append('name', input_data.name); 
      formData.append('property_type', input_data.property_type); 
      formData.append('city', input_data.city); 
      formData.append('photo', this.ImageObj);
      formData.append('floor_space', input_data.floor_space); 
      formData.append('no_of_balconies', input_data.no_of_balconies); 
      formData.append('no_of_bedrooms', input_data.no_of_bedrooms); 
      formData.append('no_of_bathrooms', input_data.no_of_bathrooms); 
      formData.append('no_of_kitchens', input_data.no_of_kitchens); 
      formData.append('property_desc', input_data.property_desc);  
      formData.append('pets_allowed', input_data.pets_allowed); 
      formData.append('status', input_data.status); 
	    formData.append('no_of_parking_space', input_data.no_of_parking_space); 

        console.log(formData);

	    let token; 
		  if(sessionStorage.getItem("auth_token")!=undefined){
			 token = sessionStorage.getItem("auth_token"); 
		  }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      this.http.post(this.base_url+'propertynew', formData, httpOptions).subscribe(response => {
        	console.log(response); 
        	this.isSuccess = true; 
        	this.sucessArr = response;
        	this.isError = false; 
          this.loadingController.dismiss().then(a => console.log('dismissed'));
          this.presentAlert(); 
          this.sucessArr = [] ;
       },error=>{ 
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
        ...useAlbum ? {sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM} : {}
      }

        const imageData = await this.camera.getPicture(options); 
        this.currentImage = `${imageData}`;  
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

}
