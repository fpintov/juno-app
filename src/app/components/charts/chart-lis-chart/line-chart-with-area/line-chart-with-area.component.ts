import { Component } from '@angular/core';
import { chart5 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-line-chart-with-area',
  templateUrl: './line-chart-with-area.component.html',
  styleUrls: ['./line-chart-with-area.component.scss']
})

export class LineChartWithAreaComponent {


   public chart5 = chart5;

}
