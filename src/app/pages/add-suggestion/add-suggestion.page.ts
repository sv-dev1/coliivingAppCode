import {  Component,  OnInit} from '@angular/core';
import {  Router,  ActivatedRoute,  Params} from '@angular/router';
import {  FormGroup,  FormBuilder,  Validators,  FormControl,  FormArray} from '@angular/forms';
import {  ItemService} from '../../services/item.service';
import {  AlertController} from '@ionic/angular';
import {  LoadingController} from '@ionic/angular';
import {  environment} from '../../../environments/environment';
import {  HttpClient,  HttpHeaders,  HttpClientModule} from '@angular/common/http';
import {  ActionSheetController,  Platform} from '@ionic/angular';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.page.html',
  styleUrls: ['./add-suggestion.page.scss'],
})
export class AddSuggestionPage implements OnInit {

  userId: any;
  loggedInUsername: any;
  taskId: any;
  dataArr: any;
  suggestionList: any;
  taskArr: any;
  items: any;
  base_url: string = "";
  suggestion: string = "";
  isItemAvailable = false;
  taskDate: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.userId = sessionStorage.getItem("loggedInId");
    this.loggedInUsername = sessionStorage.getItem("loggedInUsername");
    this.isItemAvailable = false;
    this.suggestion = '';
    this.base_url = environment.base_url;
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.taskId = params['taskId'];
    })

  }
  ngOnInit() {
    this.getSuggestionList();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 10000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const {
      role,
      data
    } = await loading.onDidDismiss();
    console.log('Suggestion added successfully!!!');
  }
  addSuggestion() {

    const input_data = {
      "userId": this.userId,
      "taskId": this.taskId,
      "notes": this.suggestion,
    }
    console.log(input_data);
    let resArr: any;
    this.presentLoading();
    this.itemService.add_suggesation(input_data).subscribe((response: any) => {
      console.log(response.message);
      this.loadingController.dismiss().then(a => console.log('dismissed'));
      this.suggestion = '';
      this.presentAlert(response.message);
    }, error => {
      console.log(error)
    })
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: "Done!",
      message: message,
      buttons: [{
        text: 'Okay',
        handler: () => {
          console.log('Confirmed Okay');
          this.router.navigate(['house-chores']);
        }
      }]
    });
    alert.present();
  }
  getSuggestionList(): void {
    let token;
    if (sessionStorage.getItem("auth_token") != undefined) {
      token = sessionStorage.getItem("auth_token");
    }
    this.presentLoading();
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.http.get(this.base_url + 'task/' + this.taskId + '/suggestion', {
      headers: headers
    }).subscribe((response: any) => {
      this.suggestionList = response.suggestionList.suggestionArr;
      this.taskArr = response.suggestionList.taskArr;
      let splitDate = this.taskArr.due_date.split('T');
      this.taskDate = splitDate[0];
      console.log('this.taskArr',this.taskArr);
      this.loadingController.dismiss().then(a => console.log('dismissed'));
    }, error => {
      //console.log("ERROR");
      //console.log(error.error);
      this.loadingController.dismiss().then(a => console.log('dismissed'));
    });
  }

}