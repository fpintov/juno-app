import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EditorsRoutingModule } from './editors-routing.module';

import { NgxEditorModule } from 'ngx-editor';
import { MdeEditorsComponent } from './mde-editors/mde-editors.component';
import { NgxEditorComponent } from './ngx-editor/ngx-editor.component';

@NgModule({
  declarations: [
    NgxEditorComponent,
    MdeEditorsComponent
  ],
  imports: [
    CommonModule,
    EditorsRoutingModule, 
    SharedModule,
    NgxEditorModule
  ]
})
export class EditorsModule { }
