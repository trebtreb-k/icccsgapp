import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPincodePageRoutingModule } from './setting-pincode-routing.module';

import { SettingPincodePage } from './setting-pincode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingPincodePageRoutingModule
  ],
  declarations: [SettingPincodePage]
})
export class SettingPincodePageModule {}
