import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-detailed-course',
  templateUrl: './detailed-course.component.html',
  styleUrls: ['./detailed-course.component.scss']
})

export class DetailedCourseComponent {

  public commentsData = commentsData;

}
