import { Component } from '@angular/core';
import { lineChart } from '../../../../shared/data/chart/charts/google-chart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {

  public lineChart = lineChart;

}
