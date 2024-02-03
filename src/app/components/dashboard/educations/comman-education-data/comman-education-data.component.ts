import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/education';

@Component({
  selector: 'app-comman-education-data',
  templateUrl: './comman-education-data.component.html',
  styleUrls: ['./comman-education-data.component.scss']
})

export class CommanEducationDataComponent {
  public commanEducationData = data.commanEducationData;

}
