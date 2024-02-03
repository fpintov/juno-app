import { Component } from '@angular/core';
import { dountChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})

export class DonutChartComponent {

  public donutChart = dountChart;


}
