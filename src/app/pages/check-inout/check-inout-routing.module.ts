import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckInoutPage } from './check-inout.page';

const routes: Routes = [
  {
    path: '',
    component: CheckInoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInoutPageRoutingModule {}
