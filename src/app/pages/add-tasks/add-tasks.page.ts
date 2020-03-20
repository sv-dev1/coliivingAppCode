import {  Component,  OnInit,ViewChild} from '@angular/core';
import {  Router} from '@angular/router';
import {  FormGroup,  FormBuilder,  Validators,  FormControl,  FormArray} from '@angular/forms';
import {  ItemService} from '../../services/item.service';
import {  AlertController} from '@ionic/angular';
import {  LoadingController} from '@ionic/angular';
import {  environment} from '../../../environments/environment';
import {  HttpClient,  HttpHeaders,  HttpClientModule} from '@angular/common/http';
import {  Observable} from 'rxjs/Observable';
import {  Camera,  CameraOptions,  PictureSourceType} from '@ionic-native/camera/ngx';
import {  ActionSheetController,  Platform} from '@ionic/angular';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.page.html',
  styleUrls: ['./add-tasks.page.scss'],
})
export class AddTasksPage implements OnInit {
   @ViewChild(IonContent) content: IonContent;

  base_url: string = "";
  userId: string = "";
  loggedInUsername: string = "";
  image_url: string = "";
  team_form: FormGroup;
  submitted = false;
  fagree = false;
  isError: boolean = false;
  isSuccess: boolean = false;
  res: any = [];
  errorsArr: any = [];
  sucessArr: any = [];
  assignArr: any = [];
  fileData: any;
  ImageObj: any;
  usersArr: any = [];
  teamListArr: any = [];
  categoriesArr: any = [];

  userListArr = [];
  usersArr1 = [];
  userListArrForAssign = [];
  nickname: string = '';
  IsOneGroup :boolean=false;
  isUploading : boolean = false;
  
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
    private platform: Platform
  ) {
    //this.getUsersList();
    this.base_url = environment.base_url;
    this.team_form = this.formBuilder.group({
      task_name: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9]+[a-zA-Z0-9 ]+")]),
      assign_to: new FormControl('', Validators.required),
      team_id: new FormControl('', Validators.required),
      due_date: new FormControl('', Validators.required),
      photo: new FormControl(''),
      category: new FormControl(''),
      notes: new FormControl(''),
    });
    this.userId = sessionStorage.getItem("loggedInId");
    this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
  }

  ngOnInit() {
    this.nickname = sessionStorage.getItem("loggedInUsername");

  }
  ionViewWillEnter() {
    this.getTeamsList();
  }

  async custommessage(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 2000,
      cssClass: 'custom-class custom-loading1',
      spinner:null
    });
    await loading.present();
    const {
      role,
      data
    } = await loading.onDidDismiss();
  }

  getTeamsList(): void {
    console.log('All teams gets list out under this function');

    let token;
    if (sessionStorage.getItem("auth_token") != undefined) {
      token = sessionStorage.getItem("auth_token");
    }
    this.presentLoading();
    //const httpOptions = { headers: new HttpHeaders({'authorization': token })};

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);

    this.http.get(this.base_url + 'getTeam', {
      headers: headers
    }).subscribe((response: any) => {
      this.teamListArr = response.teams;
      
      this.loadingController.dismiss().then(a => console.log('dismissed'));
    }, error => {
      console.log(error.error);
      this.loadingController.dismiss().then(a => console.log('ERROR'));
    });
      this.http.get(this.base_url + 'categories', {
        headers: headers
      }).subscribe((response: any) => {
        this.categoriesArr = response.categories;
      }, error => {
      //console.log("ERROR");
      //  console.log(error.error);
      if (error.error == 'Unauthorized') {
        this.custommessage('Please login again...');
      }

    });
    this.loadingController.dismiss().then(a => console.log('dismissed'));
  }

  onTeamSelection(checkedVal): void {
    /*
        if(checkedVal == this.userId)
        {
          this.usersArr = [];
          let arr = {
            'userId':this.userId,
            'login':{ 'username':this.loggedInUsername }
          };
        this.usersArr = arr;
        console.log(this.usersArr);
        return;
        }
    */
    let postArr = {
      'teamId': [checkedVal]
    };
    this.usersArr=[];
    let token;
    this.presentLoading();
    if (sessionStorage.getItem("auth_token") != undefined) {
      token = sessionStorage.getItem("auth_token");
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': token
      })
    };
    this.http.post(this.base_url + 'team/users', postArr, httpOptions).subscribe((response: any) => {
      let arrayUniqe = [];

      response.teams.forEach(obj => {
        let newObj = {};
        newObj['id'] = obj.id,
          newObj['team_id'] = obj.team_id,
          newObj['userId'] = obj.userId,
          newObj['userProfile'] = obj.userProfile,
          newObj['login'] = obj.login,
          newObj['isChecked'] = false,
          arrayUniqe.push(newObj);
      });
      let getresArr = this.getUnique(arrayUniqe, 'userId');
      this.usersArr1 = getresArr;
       this.usersArr1.forEach(element => {
          if(element.login.username != this.nickname){
          //  console.log(element.login.roleId);
            if(element.login.roleId == '4'){
                this.usersArr.push({userId:element.userId, name:element.userProfile.firstName+' '+element.userProfile.lastName, email:element.userProfile.email,username:element.login.username });
            }
          }
      });
       console.log(this.usersArr);
      this.loadingController.dismiss();
    }, error => {
      //  console.log("ERROR");
      //   console.log(error);
    });
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 4000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const {
      role,
      data
    } = await loading.onDidDismiss();
  }


  get f() {
    return this.team_form.controls;
  }

  async presentAlert(messageC) {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: messageC,
      message: 'Click Okay to redirect to dashboard page and click Cancel to stay on same page.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirmed Cancel: Cancelled');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.router.navigate(['house-chores']);
          console.log('Confirmed Okay');
        }
      }]
    });
    alert.present();
  }
  fileProgress(event) {
    this.fileData = event.target.files[0];
    console.log(this.fileData);
  }

  registerTeam(form) {

    this.submitted = true;
    this.isUploading  = true;
    if (this.team_form.invalid) {
      this.isUploading  = false;
       console.log("if");
    this.content.scrollToTop(200);

      return;
    } else {
     //  console.log("else");

      let dateString = form.due_date;
      let today = new Date();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let taskDate = dateString+'T'+time;
      const input_data = {
        "task_name": form.task_name,
        "team_id": form.team_id,
        "assign_to": form.assign_to,
        "due_date": taskDate,
        "photo": this.ImageObj,
        "category": form.category,
        "notes": form.notes,
      }
      const formData = new FormData();
      formData.append('task_name', input_data.task_name);
      formData.append('assignTo', input_data.assign_to);
      formData.append('teamId', input_data.team_id);
      formData.append('due_date', input_data.due_date);
      formData.append('photo', this.ImageObj);
      formData.append('category_id', input_data.category);
      formData.append('notes', input_data.notes);

      let token;
      if (sessionStorage.getItem("auth_token") != undefined) {
        token = sessionStorage.getItem("auth_token");
      }
      this.presentLoading();
      const httpOptions = {
        headers: new HttpHeaders({
          'authorization': token
        })
      };
      this.http.post(this.base_url + 'createTask', formData, httpOptions).subscribe((response: any) => {
        //  console.log(response); 
        this.isSuccess = true;
        this.sucessArr = response;
        this.isError = false;
        this.loadingController.dismiss().then(a => console.log('dismissed'));
        this.team_form.reset();
        this.presentAlert(response.message);
        this.sucessArr = [];
        this.isUploading  = false;
      }, error => {
        console.log("ERROR");
        console.log(error.error);
        this.isUploading  = false;
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
    console.log(this.ImageObj);

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
    var blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }

}