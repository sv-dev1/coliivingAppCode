import { Component, OnInit } from '@angular/core';
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
import { ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-create-bills',
  templateUrl: './create-bills.page.html',
  styleUrls: ['./create-bills.page.scss'],
}) 
export class CreateBillsPage implements OnInit {
   @ViewChild(IonContent) content: IonContent;

   base_url : string = "";
   bills_form: FormGroup;
  submitted = false;
  fagree = false;
  isError : boolean = false;
  isSuccess : boolean = false;
  masterCheck : boolean = false;
  res:any = [];
  sentArr = [];
  payeeNameArr = [];
  payeePriceArr = [];
  errorsArr:any = []; 
  sucessArr:any = []; 
  assignArr:any = []; 
  fileData :any ; 
  loggedInId :any ; 
  individualTotal :any ; 
  ImageObj :any ; 
  teamListArr :any = [];
  //temssg :any = [];
  userListArr :any = [];
  userListArrForAssign :any = [];
  currentImage : string = "";
  currentImageWithoutCode : string = "";
  maxData : any = (new Date()).getFullYear() + 5;
  selectedObjects:any =[];
  seletUser:any=[];
  isIndeterminate:boolean;
  checkBoxList:any;
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
  ){ 
    
      this.loggedInId = sessionStorage.getItem("loggedInId"); 
      this.base_url = environment.base_url;
      this.bills_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      team: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      payees:this.formBuilder.array([this.formBuilder.group({user:new FormControl('', Validators.required),
      price:new FormControl('', Validators.required)})]),  
          //upload_bill: new FormControl(''),
      assign_to: new FormControl('', Validators.required), 
    });
   } 
  checkMaster(event) {
     setTimeout(()=>{
      this.userListArr.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }
 
  checkEvent(event) {
    if(this.selectedObjects.find(obj => obj === event.target.value)){
          this.selectedObjects.splice(this.selectedObjects.indexOf(event.target.value), 1);
    }
    else
    {
         this.selectedObjects.push(event.target.value);
    }

   // console.log(this.selectedObjects);
      this.bills_form.patchValue({assign_to: this.selectedObjects})

    const totalItems = this.userListArr.length;
    let checked = 0;
    this.userListArr.map(obj => {
      if (obj.isChecked) checked++;
    });
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }
 
 
  ngOnInit(){   
    this.getTeamsList();
  }
  get websites() {
    return this.bills_form.get('payees') as FormArray;
  }

 removeUser(index) { 
    this.websites.removeAt(index); 
  }
 
  async customMe(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 1500,
      cssClass: 'custom-class custom-loading1',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  addMoreSites(){ 

    if(this.bills_form.controls.team.value)
    {
        let checkPoint = 0;
        let iu = 0;
        let total_amount = 0; 
        if(this.bills_form.value.amount =='' || this.bills_form.value.amount == 'undefined'){
              this.customMe('Please enter total bill amount!');
              checkPoint = 0;
              return; 
        } 
         this.websites.value.forEach(obj =>{
         if(obj.user != '' && obj.price != ''){
          total_amount = total_amount + obj.price;
          if(total_amount == this.bills_form.value.amount){
          this.customMe('You payee total is equal to total bill amount so please update bill total to add more payee!');
            checkPoint = 0;
            return;  
          }
         if(total_amount > this.bills_form.value.amount){ 
            this.customMe('You payee total exceeded from total bill amount so please check payee amount!');
            checkPoint = 0;
            return;     
          }
          else if(obj.price == ''){
              this.customMe('Please enter amount for payee!');
              checkPoint = 0;
              return; 
          }        
         } 
            if(obj.user == ''){
               this.customMe('Please select payee!');
              checkPoint = 0;
              return;
            }
            if(obj.price == ''){
             this.customMe('Please enter payee amount!');
              checkPoint = 0;
              return; 
            }
            else{
              if(obj.price > this.bills_form.value.amount) 
              return; 
              checkPoint =1; 
            }
          });
         
       if(checkPoint == 1 &&  this.bills_form.value.amount != '' && total_amount < this.bills_form.value.amount){
           this.websites.push(this.formBuilder.group({user:'',price:''}));
          checkPoint = 0;
        }
       this.individualTotal = total_amount;
    }
    else
    {
      this.customMe('Please select group!');
        return; 
    }
  } 

  register(form){ 
    console.log(this.bills_form.value);
    this.submitted = true;
    console.log(form.payees);
    let total_amount =0;
    form.payees.forEach(obj => {
      this.payeeNameArr.push(obj.user);
      this.payeePriceArr.push(obj.price);
      total_amount = total_amount + obj.price;
      });  
    console.log('this.individualTotal',this.individualTotal);
   
    console.log(JSON.stringify(this.sentArr));  
    if (this.bills_form.invalid) {
        this.content.scrollToTop(200);

      return;
    }else{  
       if(total_amount > form.amount || total_amount < form.amount)
    {
      this.customMe('Payee amount is not matching with total amount!!! Please check.');
      return;
    }
      const input_data = { 
          "title" : form.title,
          "team" : form.team,
          "amount" : form.amount,
          "date" : form.date,
          "assign_to" : form.assign_to,
          "payees" : form.payees,
        }

    
      console.log( input_data.assign_to);
      console.log( this.payeeNameArr);
      const formData = new FormData();
      formData.append('title', input_data.title);  
      formData.append('files', this.ImageObj);      
      formData.append('team', input_data.team);
      formData.append('amount', input_data.amount);
      formData.append('date', input_data.date);
      formData.append('userId', input_data.assign_to);
      formData.append('payee_name', (this.payeeNameArr).toString());
      formData.append('payee_price',(this.payeePriceArr).toString());
 
      console.log(formData);

      let token; 
      if(sessionStorage.getItem("auth_token")!=undefined){
       token = sessionStorage.getItem("auth_token"); 
      }
      this.presentLoading();
      const httpOptions = { headers: new HttpHeaders({'authorization': token })};
      this.http.post(this.base_url+'createBills', formData, httpOptions).subscribe(response => {
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

  getTeamsList() : void {
    console.log('All teams gets list out under this function');

    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
    }
    this.presentLoading();
    //const httpOptions = { headers: new HttpHeaders({'authorization': token })};

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
     });     
  }

search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].userId === nameKey) {
            return i;
        }
    }
}
// 
checkAll(event){
  //  console.log("working condition");
    if(event.target.checked){
    //    console.log("if condition");
        this.teamListArr.forEach(obj => {
         // obj.isChecked = true;
        });
      }else{
        console.log("else condition");
      }
}

  setIndexHidden(value){ 
     console.log(value);
     this.seletUser.push(value);
     let index = this.search(value, this.userListArr); 
     this.userListArr[index].isChecked = true; 
  }

  isDisabled(userid: any):boolean{
      return this.seletUser.includes(userid); // note, i'm not certain if this should just be occupation.
  }

 getUnique(arr, comp) {

  const unique = arr
       .map(e => e[comp])

     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

   return unique;
} 

  onTeamSelection(checkedVal) : void {
    let counter = this.bills_form.value.payees.length ;
      this.bills_form.value.payees.forEach(obj => {
      if(counter != 0){
        this.websites.removeAt(counter); 
        counter--;
      }
      });  
     let teamId=[];
     teamId.push(checkedVal);
           console.log('pppppppppppp:',teamId);

    let postArr = {'teamId': teamId};

    let token; 
        if(sessionStorage.getItem("auth_token")!=undefined){
         token = sessionStorage.getItem("auth_token"); 
        }  
        this.infiniteLoading();
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
  console.log(getresArr);
  this.userListArr=[];
  getresArr.forEach(obj =>{
    console.log(obj.login.roleId);
    if(obj.login.roleId == '4'){
      this.userListArr.push(obj);
    }
  });
  console.log(this.userListArr.length);
 // this.userListArr = getresArr;
   this.userListArrForAssign = getresArr;
   this.loadingController.dismiss();
 // console.log(this.userListArr);
 // this.userListArr = response.teams; 
  },error=>{ 
      console.log("ERROR");
      console.log(error);
  });

    console.log("Checkbox Checked");
  }


  get f() { return this.bills_form.controls; } 

 fileProgress(event) {
    this.fileData = event.target.files[0];   
    console.log(this.fileData);
  } 

  pushToAssignArr(value){ 
     this.assignArr.push(value);
     console.log(this.assignArr);
  } 

  async infiniteLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
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
      subHeader: 'Bill created successfully!!!',
      message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
      buttons:[ {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmed Cancel: blah');
            this.bills_form.reset();
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['bill-listing']);
            console.log('Confirmed Okay');
            this.bills_form.reset();
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
      ...useAlbum ? {sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM} : {}
    }

    const imageData = await this.camera.getPicture(options); 
    this.currentImage = `data:image/jpeg;base64,${imageData}`; 
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
