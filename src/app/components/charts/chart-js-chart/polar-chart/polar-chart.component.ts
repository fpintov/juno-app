import { Component } from '@angular/core';
import * as data from "../../../../shared/data/chart/charts/chartjs";

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss']
})


export class PolarChartComponent {

    // polarChart
    public polarChartLabels = data.polarChartLabels;
    public polarChartData = data.polarChartData;
    public polarChartType = data.polarChartType;
    public polarChartColors = data.polarChartColors;
    public polarChartOptions = data.polarChartOptions;
    public polarChartLegend = data.polarChartLegend;

}
