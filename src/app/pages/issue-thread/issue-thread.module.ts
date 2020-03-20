import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IssueThreadPage } from './issue-thread.page';

const routes: Routes = [
  {
    path: '',
    component: IssueThreadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssueThreadPage]
})
export class IssueThreadPageModule {}
