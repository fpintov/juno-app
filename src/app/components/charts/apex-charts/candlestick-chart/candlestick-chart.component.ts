import { Component } from '@angular/core';
import { candelsStickChart } from '../../../../shared/data/chart/charts/apex-chart';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss']
})

export class CandlestickChartComponent {

  public candlestickChart = candelsStickChart;


}
