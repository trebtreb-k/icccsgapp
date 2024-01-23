// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { ApproverDetailPage } from './approver-detail.page';
import { ApproverDetailPageRoutingModule } from './approver-detail-routing.module';
import { CalendarModule } from 'ion2-calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ApproverDetailPageRoutingModule, CalendarModule],
  declarations: [ApproverDetailPage],
})
export class ApproverDetailModule { }
