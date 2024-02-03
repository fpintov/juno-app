import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportTickitComponent } from './support-tickit.component';

const routes: Routes = [
   {
    path : '',
    children : [
        {
          path : '',
          component : SupportTickitComponent,
          data :  {
             title:'Support Ticket',
             breadcrumb : 'Support Ticket'
          }
        }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportTickitRoutingModule { }
