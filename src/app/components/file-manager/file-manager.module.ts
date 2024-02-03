import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FileManagerComponent } from './file-manager.component';
import { RightContentComponent } from './right-content/right-content.component';


@NgModule({
  declarations: [
    FileManagerComponent,
    RightContentComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule
  ]
})
export class FileManagerModule { }
