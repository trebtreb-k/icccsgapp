import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingPincodePage } from './setting-pincode.page';

const routes: Routes = [
  {
    path: '',
    component: SettingPincodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingPincodePageRoutingModule {}
