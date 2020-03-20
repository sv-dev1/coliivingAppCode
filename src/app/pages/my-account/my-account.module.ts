import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';  
import { IonicModule } from '@ionic/angular'; 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
 import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

import { MyAccountPage } from './my-account.page';

const routes: Routes = [
  {
    path: '',
    component: MyAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes), 
    NgMultiSelectDropDownModule.forRoot()   ,
    GooglePlaceModule,  
    InternationalPhoneNumberModule,
  ],
  declarations: [MyAccountPage]
})
export class MyAccountPageModule {}
