import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl,FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { PopoverController } from '@ionic/angular'; 
import { NavController,AlertController,ModalController,LoadingController ,ActionSheetController} from '@ionic/angular';  

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.page.html',
  styleUrls: ['./edit-property.page.scss'],
})
export class EditPropertyPage implements OnInit {
   propertyId:any;
   editform:FormGroup;
  constructor(
     private route: ActivatedRoute,
     public popoverController: PopoverController,
     private router: Router, public formBuilder: FormBuilder, 
     private http: HttpClient, 
      public alertController: AlertController,
      public loadingController: LoadingController,
      public viewCtrl: ModalController
      ) { 
      this.route.queryParams.subscribe(params => { 
        this.propertyId=params['propertyId']; 
        }); 
      this.editform = this.formBuilder.group({
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
    console.log(this.propertyId)
  }

  submit(value){
   console.log(value);
  }

}
