import {  Component,  OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {  ItemService} from '../../services/item.service';
import {AlertController,ModalController,LoadingController,ActionSheetController,Platform,NavController} from '@ionic/angular';
import {  environment} from '../../../environments/environment';
import {  HttpClient,  HttpHeaders,  HttpClientModule} from '@angular/common/http';
import {  PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-group-bill-listing',
  templateUrl: './group-bill-listing.page.html',
  styleUrls: ['./group-bill-listing.page.scss'],
})
export class GroupBillListingPage implements OnInit {
  base_url: string = "";
  image_base_url : string = "";
  teamId: string = "";
  teamname: string = "";
  billsArr: any = [];
  sucessArr: any = [];
  isSuccess: boolean = true;
  isError: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    private navCtrl: NavController,
    public popoverController: PopoverController,

  ) {
    this.base_url = environment.base_url;
    this.image_base_url = environment.image_base_url; 
    this.route.queryParams.subscribe(params => {
      this.teamId = params['teamId'];
      this.teamname = params['teamname'];
    });
  }

  ngOnInit() {
    this.getBillListing();
  }
  ionViewWillEnter() {
    this.getBillListing();
  }

  callme(event) {
    console.log(event);
  }

  getBillListing() {
    console.log('my bills get list out under this function');
      let token;
      if (sessionStorage.getItem("auth_token") != undefined) {
        token = sessionStorage.getItem("auth_token");
        console.log(token);
      }
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', token);
      this.pleaseWait();

      this.http.get(this.base_url + 'team/bills/' + this.teamId, {
        headers: headers
      }).subscribe((response: any) => {
        this.loadingController.dismiss().then(a => console.log('dismissed'));
        this.billsArr = response.bills;
        console.log(this.billsArr);
      }, error => {
        console.log("ERROR");
        console.log(error.error);
      });

  }

  async pleaseWait() {
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

   removeBill(billId) {
        this.confirmDelete(billId);
    }

  async confirmDelete(id) {
    const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'You really want to delete bill?',
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
          this.deleteBill(id);
          }
        }
    ]
    });

    await alert.present();
  }


  deleteBill(billId){
  if (billId) {
      let token;
      if (sessionStorage.getItem("auth_token") != undefined) {
        token = sessionStorage.getItem("auth_token");
        console.log(token);
      }
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        this.http.delete(this.base_url + 'bill/'+billId ,{headers: headers}).subscribe((response: any) => {
        console.log(response);
        this.isSuccess = true;
        this.sucessArr = response;
        this.isError = false;
        this.loadingController.dismiss().then(a => console.log('dismissed'));
        /*this.presentLoadingCustom(response.message); */
        this.popoverController.dismiss();
        this.presentAlert(response.message);
        this.sucessArr = [];


        }, error => {
        console.log(error.error);
        });
      }
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Success Message!',
      subHeader: message,
      message: 'Click Okay to redirect to groups bill listing and click Cancel to stay on same page.',
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
          this.router.navigate(['bill-listing']);
          //console.log('Confirmed Okay');
        }
      }]
    });
    alert.present();
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

  async presentLoadingCustom(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 3000,
      cssClass: 'custom-class custom-loading1'
    });
    await loading.present();
    const {
      role,
      data
    } = await loading.onDidDismiss();
  }
}