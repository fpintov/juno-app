import { Component } from '@angular/core';
import { areaSpaline } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-area-spaline-chart',
  templateUrl: './area-spaline-chart.component.html',
  styleUrls: ['./area-spaline-chart.component.scss']
})

export class AreaSpalineChartComponent {

  public areaSpalineChart = areaSpaline;

}
