import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectToCustomerPage } from './direct-to-customer.page';

const routes: Routes = [
  {
    path: '',
    component: DirectToCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectToCustomerPageRoutingModule {}
