import { RouterModule, Routes } from '@angular/router';

import { CustomerPage } from './customer.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage,
  },
  {
    path: 'customer-add',
    loadChildren: () => import('./customer-add/customer-add.module').then((m) => m.CustomerAddPageModule),
  },
  {
    path: 'customer-new',
    loadChildren: () => import('./customer-new/customer-new.module').then( m => m.CustomerNewPageModule)
  },
  {
    path: 'customer-view',
    loadChildren: () => import('./customer-view/customer-view.module').then( m => m.CustomerViewPageModule)
  },
  {
    path: 'customer-edit',
    loadChildren: () => import('./customer-edit/customer-edit.module').then( m => m.CustomerEditPageModule)
  },
  {
    path: 'customer-transaction',
    loadChildren: () => import('./customer-transaction/customer-transaction.module').then( m => m.CustomerTransactionPageModule)
  },
   /*
  {
    path: 'customer-edit',
    loadChildren: () => import('./customer-edit/customer-edit.module').then( m => m.CustomerViewPageModule)
  },
  {
    path: 'customer-edit',
    loadChildren: () => import('./customer-edit/customer-edit.module').then( m => m.CustomerViewPageModule)
  },
  {
    path: 'customer-transaction',
    loadChildren: () => import('./customer-transaction/customer-transaction.module').then((m) => m.CustomerTransactionPageModule),
  },
  {
    path: 'customer-transaction-detail',
    loadChildren: () =>
      import('./customer-transaction-detail/customer-transaction-detail.module').then((m) => m.CustomerTransactionDetailPageModule),
  },
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPageRoutingModule {}
