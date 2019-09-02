import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgCalendarModule } from "ionic2-calendar";
import { IonicModule } from '@ionic/angular';

import { KalenderPage } from './kalender.page';

const routes: Routes = [
  {
    path: '',
    component: KalenderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [KalenderPage]
})
export class KalenderPageModule {}
