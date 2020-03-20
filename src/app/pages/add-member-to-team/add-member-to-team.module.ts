import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddMemberToTeamPage } from './add-member-to-team.page';

const routes: Routes = [
  {
    path: '',
    component: AddMemberToTeamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddMemberToTeamPage]
})
export class AddMemberToTeamPageModule {}
