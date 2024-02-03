import { Component } from '@angular/core';
import { chart6 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-bi-polar-bar-chart',
  templateUrl: './bi-polar-bar-chart.component.html',
  styleUrls: ['./bi-polar-bar-chart.component.scss']
})

export class BiPolarBarChartComponent {

  public chart6 = chart6;

}
