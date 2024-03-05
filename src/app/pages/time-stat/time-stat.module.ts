import { NgModule } from '@angular/core';
import { CalendarModule } from 'ion2-calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeStatPageRoutingModule } from './time-stat-routing.module';

import { TimeStatPage } from './time-stat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeStatPageRoutingModule,
    CalendarModule
  ],
  declarations: [TimeStatPage]
})
export class TimeStatPageModule {}
