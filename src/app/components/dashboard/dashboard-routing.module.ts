import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ProjectComponent } from './project/project.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EducationsComponent } from './educations/educations.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default dashboard',
          breadcrumb: 'Default',
        }
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: 'Project Dashboard',
          breadcrumb: 'Project',
        }
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: {
          title: 'Ecommerce Dashboard',
          breadcrumb: 'Ecommerce',
        }
      },
      {
        path: 'education',
        component: EducationsComponent,
        data: {
          title: 'Education Dashboard',
          breadcrumb: 'Education',
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DahboardRoutingModule { }
