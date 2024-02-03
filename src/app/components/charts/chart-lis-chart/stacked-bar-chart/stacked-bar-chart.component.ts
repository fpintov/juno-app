import { Component } from '@angular/core';
import { chart7 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})

export class StackedBarChartComponent {

  public chart7 = chart7;

}
