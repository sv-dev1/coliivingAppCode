import { Component, OnInit,AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { IonContent,ActionSheetController, Platform} from '@ionic/angular';
import { PopoverController } from '@ionic/angular'; 
import { PropertyRequestComponent } from '../property-request/property-request.component';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-properties-listing',
  templateUrl: './properties-listing.page.html',
  styleUrls: ['./properties-listing.page.scss'],
})
export class PropertiesListingPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

base_url : string = "";
  propertiesArr :any = []; 
  loggedInUserId :any; 
  roleId :any; 
  token :any; 
  constructor(
  private route: ActivatedRoute, 
  public popoverController: PopoverController,  
  private http: HttpClient, 
  public itemService: ItemService,
  public alertController: AlertController,
  public loadingController: LoadingController,public router : Router

  )
  { 
      this.base_url = environment.base_url;
      if(sessionStorage.getItem("auth_token")!=undefined){ 
        this.token = sessionStorage.getItem("auth_token");
        this.roleId = sessionStorage.getItem("roleId"); 
        this.loggedInUserId = sessionStorage.getItem("loggedInId"); 
      } 
  }

	ngOnInit() {
      this.getBillListing();
	}
  getBillListing() {
      console.log('my bills get list out under this function');
      let new_taken ='';
       if(sessionStorage.getItem("auth_token")!=undefined){ 
        new_taken = sessionStorage.getItem("auth_token"); 
      } 
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', new_taken);
      this.pleaseWait();

      this.http.get(this.base_url+'properties', { headers: headers }).subscribe((response: any) => { 
      this.loadingController.dismiss().then(a => console.log('dismissed'));
        this.propertiesArr = response.flats;  
        console.log(response);
         },error=>{ 
          console.log("ERROR");
          console.log(error.error);
       });  

  }

  async presentPopover(ev: any) { 
      const popover = await this.popoverController.create({
        component: PropertyRequestComponent,
        componentProps:{propertyId:ev.propertyId,landlordId:ev.created_by},
        event: ev,
        translucent: true
      });  

      return await popover.present();
  } 


 async pleaseWait() {
    const loading = await this.loadingController.create({
      duration: 10000,
      cssClass: 'custom-class custom-loading',
      spinner:null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  sendRequest(event){ 
    console.log(event);
      const input_data = { 
          "propertyId" : event.propertyId, 
          "team_id" : "XXXXXXXXXXXXXXXXX", 
        } 
    console.log(input_data); 
    return;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.token);

    this.http.post(this.base_url+'properties',
     { headers: headers }).subscribe((response: any) => { 
        this.loadingController.dismiss().then(a => console.log('dismissed'));
        console.log(response);
     },error=>{ 
        console.log("ERROR");
        console.log(error.error);
     }); 
  }

  fullDetail(event){
     console.log(event);
     const input_data = { 
          "propertyId" : event.propertyId, 
          "team_id" : "XXXXXXXXXXXXXXXXX", 
     } 
           console.log(input_data); 
  }

  

}
 