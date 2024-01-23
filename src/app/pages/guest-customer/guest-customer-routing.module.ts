import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestCustomerPage } from './guest-customer.page';

const routes: Routes = [
  {
    path: '',
    component: GuestCustomerPage
  },
  {
    path: 'customer-new',
    loadChildren: () => import('./customer-new/customer-new.module').then( m => m.CustomerNewPageModule)
  },
  {
    path: 'customer-edit',
    loadChildren: () => import('./customer-edit/customer-edit.module').then( m => m.CustomerEditPageModule)
  },
  {
    path: 'customer-view',
    loadChildren: () => import('./customer-view/customer-view.module').then( m => m.CustomerViewPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestCustomerPageRoutingModule {}
