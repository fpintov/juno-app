import { Component } from '@angular/core';
import * as data from '../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent {

  public chartWidget1 = data.chartWidget1;
  public chartWidget2 = data.chartWidget2;
  public chartWidget3 = data.chartWidget3;

}
