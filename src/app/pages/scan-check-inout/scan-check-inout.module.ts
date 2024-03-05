import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';
import { ScanCheckInoutPage } from './scan-check-inout.page';
import { ScanCheckInoutPageRoutingModule } from './scan-check-inout-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ScanCheckInoutPageRoutingModule, CountdownModule, LottieModule],
  declarations: [ScanCheckInoutPage],
})
export class ScanCheckInoutPageModule {}
