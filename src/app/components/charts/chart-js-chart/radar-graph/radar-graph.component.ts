import { Component } from '@angular/core';
import * as chartData  from '../../../../shared/data/chart/charts/chartjs';

@Component({
  selector: 'app-radar-graph',
  templateUrl: './radar-graph.component.html',
  styleUrls: ['./radar-graph.component.scss']
})

export class RadarGraphComponent {

  public radarGraphOptions = chartData.radarGraphOptions;
  public radarGraphLabels = chartData.radarGraphLabels;
  public radarGraphType = chartData.radarGraphType;
  public radarGraphLegend = chartData.radarGraphLegend;
  public radarGraphData = chartData.radarGraphData;

}
