import { Component } from '@angular/core';
import { findCourse } from '../../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-find-course',
  templateUrl: './find-course.component.html',
  styleUrls: ['./find-course.component.scss']
})

export class FindCourseComponent {

  public findCourse = findCourse;
  public isCollapsed = false;

}
