import { Component } from '@angular/core';
import { columnChart2 } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-column-chart-two',
  templateUrl: './column-chart-two.component.html',
  styleUrls: ['./column-chart-two.component.scss']
})

export class ColumnChartTwoComponent {

  public columnChart2 = columnChart2;


}
