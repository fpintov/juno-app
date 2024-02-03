import { Component } from '@angular/core';
import { stepLineChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-stepline-chart',
  templateUrl: './stepline-chart.component.html',
  styleUrls: ['./stepline-chart.component.scss']
})

export class SteplineChartComponent {

  public stepLineChart = stepLineChart;


}
