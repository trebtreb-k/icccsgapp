import { CalendarModule } from 'ion2-calendar';
import { CommonModule } from '@angular/common';
import { CsgPlanPage } from './csg-plan.page';
import { CsgPlanPageRoutingModule } from './csg-plan-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CsgPlanPageRoutingModule, CalendarModule, LottieModule],
  declarations: [CsgPlanPage],
})
export class CsgPlanPageModule {}
