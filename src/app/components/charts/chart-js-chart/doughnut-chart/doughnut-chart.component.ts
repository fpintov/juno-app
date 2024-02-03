import { Component } from '@angular/core';
import * as data from "../../../../shared/data/chart/charts/chartjs";

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent {

  public doughnutChartLabels = data.doughnutChartLabels;
  public doughnutChartData = data.doughnutChartData;
  public doughnutChartType = data.doughnutChartType;
  public doughnutChartColors = data.doughnutChartColors;
  public doughnutChartOptions = data.doughnutChartOptions;
  public doughnutChartLegend = data.doughnutChartLegend;

}
