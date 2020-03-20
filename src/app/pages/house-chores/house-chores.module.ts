import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HouseChoresPage } from './house-chores.page';

const routes: Routes = [
  {
    path: '',
    component: HouseChoresPage
  }
];

 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HouseChoresPage]
})
export class HouseChoresPageModule {}
