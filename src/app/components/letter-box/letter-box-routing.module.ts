import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EmailComponent,
        data: {
          title: 'Letter Box',
          breadcrumb: 'Letter Box',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetterBoxRoutingModule { }
