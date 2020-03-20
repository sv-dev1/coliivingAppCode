import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddPropertyPage } from './add-property.page';
 import { GooglePlaceModule } from "ngx-google-places-autocomplete";

const routes: Routes = [
  {
    path: '',
    component: AddPropertyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    GooglePlaceModule
  ],
  declarations: [AddPropertyPage]
})
export class AddPropertyPageModule {}
