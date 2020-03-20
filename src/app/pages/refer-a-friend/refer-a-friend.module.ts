import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReferAFriendPage } from './refer-a-friend.page';

const routes: Routes = [
  {
    path: '',
    component: ReferAFriendPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReferAFriendPage]
})
export class ReferAFriendPageModule {}
