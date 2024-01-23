import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateWorkflowPage } from './create-workflow.page';

const routes: Routes = [
  {
    path: '',
    component: CreateWorkflowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateWorkflowPageRoutingModule {}
