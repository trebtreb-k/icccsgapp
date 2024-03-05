import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdpaPrivacyNotifyPageRoutingModule } from './pdpa-privacy-notify-routing.module';

import { PdpaPrivacyNotifyPage } from './pdpa-privacy-notify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdpaPrivacyNotifyPageRoutingModule
  ],
  declarations: [PdpaPrivacyNotifyPage]
})
export class PdpaPrivacyNotifyPageModule {}
