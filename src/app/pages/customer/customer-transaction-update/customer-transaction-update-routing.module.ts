import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerTransactionUpdatePage } from './customer-transaction-update.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerTransactionUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerTransactionUpdatePageRoutingModule {}
