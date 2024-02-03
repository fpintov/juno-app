import { Component } from '@angular/core';
import { chart10 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-simple-line-chart',
  templateUrl: './simple-line-chart.component.html',
  styleUrls: ['./simple-line-chart.component.scss']
})

export class SimpleLineChartComponent {

   public chart10 = chart10;

}
