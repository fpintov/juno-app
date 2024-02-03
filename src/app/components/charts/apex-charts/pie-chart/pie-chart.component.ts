import { Component } from '@angular/core';
import { pieChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent {

  public pieChart = pieChart;

}
