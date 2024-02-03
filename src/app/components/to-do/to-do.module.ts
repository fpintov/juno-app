import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToDoRoutingModule } from './to-do-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ToDoComponent } from './to-do.component';

@NgModule({
 
  declarations: [ToDoComponent],
  
  imports: [
    CommonModule,
    ToDoRoutingModule,
    SharedModule,
  ],
  providers : [
    DatePipe
  ]
})

export class ToDoModule { }
