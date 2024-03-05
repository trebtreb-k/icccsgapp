import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CreateWorkflowPage } from './create-workflow.page';
import { CreateWorkflowPageRoutingModule } from './create-workflow-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, CreateWorkflowPageRoutingModule],
  declarations: [CreateWorkflowPage],
})
export class CreateWorkflowPageModule {}
