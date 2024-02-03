import { Component } from '@angular/core';
import * as data from "../../../../shared/data/chart/charts/chartjs";

@Component({
  selector: 'app-chartjs-linechart',
  templateUrl: './chartjs-linechart.component.html',
  styleUrls: ['./chartjs-linechart.component.scss']
})
export class ChartjsLinechartComponent {

  public lineChartOptions = data.lineChartOptions;
  public lineChartLabels = data.lineChartLabels;
  public lineChartType = data.lineChartType;
  public lineChartLegend = data.lineChartLegend;
  public lineChartData = data.lineChartData;
  public lineChartColors = data.lineChartColors;

}
