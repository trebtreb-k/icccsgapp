import { ChartModule } from 'angular2-chartjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncomePage } from './income.page';
import { IncomePageRoutingModule } from './income-routing.module';
import { IonicModule } from '@ionic/angular';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, IncomePageRoutingModule, ChartModule, LottieModule],
  declarations: [IncomePage],
})
export class IncomePageModule {}
