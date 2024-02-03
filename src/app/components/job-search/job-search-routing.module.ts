import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSearchCardviewComponent } from './job-search-cardview/job-search-cardview.component';
import { JobSearchListviewComponent } from './job-search-listview/job-search-listview.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobApplyComponent } from './job-apply/job-apply.component';

const routes: Routes = [

  {
    path : '',
    children : [
      {
        path : 'cards-view',
        component : JobSearchCardviewComponent,
        data : {
          title : 'Cards View',
          breadcrumb : 'Cards View',
        }
      },
      {
        path : 'list-view',
        component : JobSearchListviewComponent,
        data : {
          title : 'List View',
          breadcrumb : 'List View',
        }
      },
      {
        path : 'job-details',
        component : JobDetailsComponent,
        data : {
          title : 'Job Details',
          breadcrumb : 'Job Details',
        }
      },
      {
        path : 'apply',
        component : JobApplyComponent,
        data : {
          title : 'Apply',
          breadcrumb : 'Apply',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSearchRoutingModule { }
