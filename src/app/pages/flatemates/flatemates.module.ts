import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlatematesPage } from './flatemates.page';
import {AccordionModule} from "ngx-accordion";

const routes: Routes = [
  {
    path: '',
    component: FlatematesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),AccordionModule
  ],
  declarations: [FlatematesPage]
})
export class FlatematesPageModule {}
