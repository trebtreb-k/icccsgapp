import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { WorkflowPage } from './workflow.page';

const routes: Routes = [
  {
    path: '',
    component: WorkflowPage,
  },
  {
    path: 'detial',
    loadChildren: () => import('./item-detial/item-detial.module').then((m) => m.ItemDetialPageModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./create-workflow/create-workflow.module').then((m) => m.CreateWorkflowPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkflowPageRoutingModule {}
