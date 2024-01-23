import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanCheckInoutPage } from './scan-check-inout.page';

const routes: Routes = [
  {
    path: '',
    component: ScanCheckInoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanCheckInoutPageRoutingModule {}
