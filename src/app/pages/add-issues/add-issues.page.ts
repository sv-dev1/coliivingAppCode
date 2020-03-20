import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { ActionSheetController, Platform} from '@ionic/angular';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
//import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-add-issues',
  templateUrl: './add-issues.page.html',
  styleUrls: ['./add-issues.page.scss'],
})
export class AddIssuesPage implements OnInit {
@ViewChild(IonContent) content: IonContent;

base_url : string = "";
image_url: string = "";
currentImage : string =""; 
issues_from: FormGroup;
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

  constructor(
	private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder, 
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private camera: Camera,
    private actionSheetController: ActionSheetController, 
    private platform: Platform  
    ) 
  	{
  	this.base_url = environment.base_url;
    	this.issues_from = this.formBuilder.group({
    	title: new FormControl('', Validators.required),
      issue_category: new FormControl(''),
    	assign_to: new FormControl('', Validators.required), 
    	teamId: new FormControl('', Validators.required), 
    	desc: new FormControl('', Validators.required), 
    	photo: new FormControl(''), 
    });

    }

  ngOnInit() {
    this.getTeamsList();
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
  getUnique(arr, comp) {

  const unique = arr
       .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e]).map(e => arr[e]);
   return unique;
} 

  getTeamsList() : void { 
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.get(this.base_url+'getTeam', { headers: headers }).subscribe((response: any) => {
        response.teams.forEach(obj =>{
          let newObj = {};
          newObj['id'] = obj.id,
          newObj['name'] = obj.name,
          newObj['teamId'] = obj.teamId,
          newObj['userId'] = obj.userId,
          newObj['isChecked'] = false,
          this.teamListArr.push(newObj);
        })         
        console.log(this.teamListArr);
     },error=>{ 
        console.log("ERROR");
        console.log(error.error);
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

  onTeamSelection(checkedVal) : void { 
    
    let postArr = {'teamId': checkedVal};
    let token; 
  if(sessionStorage.getItem("auth_token")!=undefined){
   token = sessionStorage.getItem("auth_token"); 
  }  
  this.presentLoading();
   const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': token })}; 
  this.http.post(this.base_url+'team/users',postArr,httpOptions).subscribe((response: any) =>
   {   
 	let arrayUniqe = [];
         response.teams.forEach(obj =>{
              let newObj = {};
          newObj['id'] = obj.id,
          newObj['team_id'] = obj.team_id,
          newObj['userId'] = obj.userId,
          newObj['userProfile'] = obj.userProfile,
          newObj['login'] = obj.login,
          newObj['isChecked'] = false, 
          arrayUniqe.push(newObj);

		});

  let getresArr = this.getUnique(arrayUniqe,'userId');
  this.userListArr = getresArr;
  this.userListArrForAssign = getresArr;
console.log(this.userListArr);
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

  get f() { return this.issues_from.controls; } 

  async custom_message(msg) {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: msg,
      message: 'Click Okay to redirect to flatemates issues listing page and click Cancel to stay on same page.',
      buttons:[ {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmed Cancel: blah');
            this.issues_from.reset();
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['dashboard']);
            console.log('Confirmed Okay');
            this.issues_from.reset();
          }
        }]
    }); 
    alert.present(); 
  }

  registerIssues(form){
  	this.submitted = true; 
  	if (this.issues_from.invalid) {
        this.content.scrollToTop(200);
        return;
    }else{ 
    		const input_data = { 
	      	"title" : form.title, 
          "issue_category":form.issue_category,
	      	"desc" : form.desc,
	      	"teamId" : form.teamId,
	      	"photo" : this.ImageObj,
	      	"assign_to" : form.assign_to, 
      	} 
    	console.log(input_data);  
    
		const formData = new FormData();
	    formData.append('title', input_data.title);
	    formData.append('desc', input_data.desc);	 
      formData.append('issue_category', input_data.issue_category);    
      formData.append('teamId', input_data.teamId);
	    formData.append('photo', this.ImageObj);
	    formData.append('assign_to', input_data.assign_to);  
	    let token; 
		if(sessionStorage.getItem("auth_token")!=undefined){
			 token = sessionStorage.getItem("auth_token"); 
		}

      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      this.http.post(this.base_url+'issues/create', formData, httpOptions).subscribe((response:any) => {
    	console.log(response); 
    	this.isSuccess = true; 
    	this.sucessArr = response;
    	this.isError = false; 
		  this.loadingController.dismiss().then(a => console.log('dismissed'));
      this.custom_message(response.message); 
		//this.presentAlert(response.message); 
		this.sucessArr = [] ;
       },error=>{ 
        	console.log("ERROR");
        	console.log(error.error);
          if(error.error == "Unauthorized" && error.status == 401){
            console.log("true");
            this.expiredMessage('Session Expired.You must login again!');
          }
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
    this.currentImage = `data:image/jpeg;base64,${imageData}`; 
    console.log(this.currentImage);
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
