import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';

import { CreateNewComponent } from './create-new/create-new.component';
import { FileUploadComponent } from './create-new/file-upload/file-upload.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({

  declarations: [
    ProjectListComponent,
    CreateNewComponent,
    FileUploadComponent
  ],

  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
  ]
})

export class ProjectModule { }
