import { Component } from '@angular/core';
import { comboChart } from '../../../../shared/data/chart/charts/google-chart';

@Component({
  selector: 'app-combo-chart',
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.scss']
})

export class ComboChartComponent {

  public comboChart = comboChart;
}
