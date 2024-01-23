import { CalendarModule } from 'ion2-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GuestPlanPageRoutingModule } from './guest-plan-routing.module';

import { GuestPlanPage } from './guest-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestPlanPageRoutingModule,
    CalendarModule,
  ],
  declarations: [GuestPlanPage]
})
export class GuestPlanPageModule {}
