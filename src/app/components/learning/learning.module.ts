import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BlogModule } from '../blog/blog.module';
import { LearningRoutingModule } from './learning-routing.module';

import { DetailedCourseComponent } from './detailed-course/detailed-course.component';
import { CategoriesComponent } from './learning-filter/categories/categories.component';
import { FindCourseComponent } from './learning-filter/find-course/find-course.component';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { UpcomingCoursesComponent } from './learning-filter/upcoming-courses/upcoming-courses.component';
import { LearningListComponent } from './learning-list/learning-list.component';


@NgModule({
  declarations: [
    LearningListComponent,
    LearningFilterComponent,
    FindCourseComponent,
    CategoriesComponent,
    UpcomingCoursesComponent,
    DetailedCourseComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    BlogModule,
    SharedModule
  ]
})
export class LearningModule { }
