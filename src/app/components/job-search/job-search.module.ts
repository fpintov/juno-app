import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { JobSearchRoutingModule } from './job-search-routing.module';

import { ApplyFormComponent } from './job-apply/apply-form/apply-form.component';
import { PersonalDetailsComponent } from './job-apply/apply-form/personal-details/personal-details.component';
import { UploadFilesComponent } from './job-apply/apply-form/upload-files/upload-files.component';
import { YourEducationComponent } from './job-apply/apply-form/your-education/your-education.component';
import { YourExperienceComponent } from './job-apply/apply-form/your-experience/your-experience.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { JobSearchCardviewComponent } from './job-search-cardview/job-search-cardview.component';
import { JobSearchListviewComponent } from './job-search-listview/job-search-listview.component';


@NgModule({
  declarations: [
    JobSearchCardviewComponent,
    JobFilterComponent,
    JobSearchListviewComponent,
    JobDetailsComponent,
    JobApplyComponent,
    ApplyFormComponent,
    PersonalDetailsComponent,
    YourEducationComponent,
    YourExperienceComponent,
    UploadFilesComponent
  ],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    SharedModule
  ]
})
export class JobSearchModule { }
