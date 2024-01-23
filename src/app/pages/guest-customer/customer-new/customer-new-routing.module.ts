import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerNewPage } from './customer-new.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerNewPageRoutingModule {}
