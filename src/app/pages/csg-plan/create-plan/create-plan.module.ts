import { CalendarModule } from 'ion2-calendar';
import { CommonModule } from '@angular/common';
import { CreatePlanPage } from './create-plan.page';
import { CreatePlanPageRoutingModule } from './create-plan-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CreatePlanPageRoutingModule, CalendarModule],
  declarations: [CreatePlanPage],
})
export class CreatePlanPageModule {}
