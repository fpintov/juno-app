import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/charts/chartjs';

@Component({
  selector: 'app-chartjs-bar-chart',
  templateUrl: './chartjs-bar-chart.component.html',
  styleUrls: ['./chartjs-bar-chart.component.scss']
})

export class ChartjsBarChartComponent {

  public barChartChartLabels = data.barChartChartLabels;
  public barChartChartData = data.barChartChartData;
  public barChartChartType = data.barChartChartType;
  public barChartChartColors = data.barChartChartColors;
  public barChartChartOptions = data.barChartChartOptions;
  public barChartChartLegend = data.barChartChartLegend;

}
