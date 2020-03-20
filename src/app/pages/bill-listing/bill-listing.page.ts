import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AlertController,ModalController,LoadingController ,ActionSheetController, Platform} from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-bill-listing',
  templateUrl: './bill-listing.page.html',
  styleUrls: ['./bill-listing.page.scss'],
})
export class BillListingPage implements OnInit { 
 base_url : string = "";
  teamListArr :any = []; 
  billsArr :any = []; 
  constructor(
    private router: Router,
    private http: HttpClient,
    public itemService: ItemService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public modalController: ModalController
    ) { 
  this.base_url = environment.base_url;
 // this.getBillListing();
  }

	ngOnInit() {
 //  this.getBillListing();
	}
  ionViewWillEnter() {
       this.getBillgroups();
// this.getBillListing();
  }
  
  callme(event){
    console.log(event); 
  }

getBillgroups() {
  let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
     console.log(token);
    } 
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.pleaseWait();

    this.http.get(this.base_url+'getTeam', { headers: headers }).subscribe((response: any) => {
        this.teamListArr = response.teams; 
        console.log(this.teamListArr);
     },error=>{ 
        console.log("ERROR");
        console.log(error.error);
     });    
}

getBillListing() {
    console.log('my bills get list out under this function');
    let token; 
    if(sessionStorage.getItem("auth_token")!=undefined){
     token = sessionStorage.getItem("auth_token"); 
     console.log(token);
    }
  //  this.presentLoading();
    //const httpOptions = { headers: new HttpHeaders({'authorization': token })};

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    this.pleaseWait();

    this.http.get(this.base_url+'bills', { headers: headers }).subscribe((response: any) => { 
    this.loadingController.dismiss().then(a => console.log('dismissed'));
    this.billsArr = response.bills;  
    console.log(this.billsArr);
     },error=>{ 
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
    const { role, data } = await loading.onDidDismiss();
  }

}


/*[routerLink]="['/add-member-to-team']"  [queryParams]="{teamId: teamList.teamId}"*/
