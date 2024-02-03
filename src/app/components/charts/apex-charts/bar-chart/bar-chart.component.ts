import { Component } from '@angular/core';
import { barChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent {

  public basicBarChart = barChart;

}
