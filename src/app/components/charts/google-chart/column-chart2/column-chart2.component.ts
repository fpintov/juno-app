import { Component } from '@angular/core';
import { columnChart2 } from '../../../../shared/data/chart/charts/google-chart';

@Component({
  selector: 'app-column-chart2',
  templateUrl: './column-chart2.component.html',
  styleUrls: ['./column-chart2.component.scss']
})

export class ColumnChart2Component {
  public columnChart2 = columnChart2;

}
