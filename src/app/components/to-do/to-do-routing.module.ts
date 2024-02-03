import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './to-do.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ToDoComponent,
        data: {
          title: 'To-Do',
          breadcrumb: 'To-Do',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
