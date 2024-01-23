import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrmsRegisterPage } from './qrms-register.page';

const routes: Routes = [
  {
    path: '',
    component: QrmsRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrmsRegisterPageRoutingModule {}
