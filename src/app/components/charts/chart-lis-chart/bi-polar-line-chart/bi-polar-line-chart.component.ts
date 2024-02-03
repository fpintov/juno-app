import { Component } from '@angular/core';
import { chart4 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-bi-polar-line-chart',
  templateUrl: './bi-polar-line-chart.component.html',
  styleUrls: ['./bi-polar-line-chart.component.scss']
})

export class BiPolarLineChartComponent {

  public chart4 = chart4;

}
