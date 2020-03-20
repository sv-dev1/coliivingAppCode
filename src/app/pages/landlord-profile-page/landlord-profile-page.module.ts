import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
 import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

import { IonicModule } from '@ionic/angular';

import { LandlordProfilePagePage } from './landlord-profile-page.page';

const routes: Routes = [
  {
    path: '',
    component: LandlordProfilePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    GooglePlaceModule,
    InternationalPhoneNumberModule
  ],
  declarations: [LandlordProfilePagePage]
})
export class LandlordProfilePagePageModule {}
