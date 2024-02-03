import { Component } from '@angular/core';
import { basicAreaChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-basic-area-chart',
  templateUrl: './basic-area-chart.component.html',
  styleUrls: ['./basic-area-chart.component.scss']
})

export class BasicAreaChartComponent {

   public basicAreaChart = basicAreaChart;

}
