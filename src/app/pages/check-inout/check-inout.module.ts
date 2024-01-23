import { CheckInoutPage } from './check-inout.page';
import { CheckInoutPageRoutingModule } from './check-inout-routing.module';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CheckInoutPageRoutingModule, CountdownModule, LottieModule],
  declarations: [CheckInoutPage],
})
export class CheckInoutPageModule {}
