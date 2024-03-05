import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerTransactionPage } from './customer-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerTransactionPageRoutingModule {}
