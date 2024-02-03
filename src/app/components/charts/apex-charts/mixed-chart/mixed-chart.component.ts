import { Component } from '@angular/core';
import { mixedChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.scss']
})

export class MixedChartComponent {

  public mixedChart = mixedChart; 


}
