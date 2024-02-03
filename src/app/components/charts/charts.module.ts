import { NgModule } from '@angular/core';
import { ChartsRoutingModule } from './charts-routing.module';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SharedModule } from '../../shared/shared.module';

import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { AreaSpalineChartComponent } from './apex-charts/area-spaline-chart/area-spaline-chart.component';
import { BarChartComponent } from './apex-charts/bar-chart/bar-chart.component';
import { BasicAreaChartComponent } from './apex-charts/basic-area-chart/basic-area-chart.component';
import { BubbleChartComponent } from './apex-charts/bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './apex-charts/candlestick-chart/candlestick-chart.component';
import { ColumnChartTwoComponent } from './apex-charts/column-chart-two/column-chart-two.component';
import { ColumnChartComponent } from './apex-charts/column-chart/column-chart.component';
import { DonutChartComponent } from './apex-charts/donut-chart/donut-chart.component';
import { MixedChartComponent } from './apex-charts/mixed-chart/mixed-chart.component';
import { PieChartComponent } from './apex-charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from './apex-charts/radar-chart/radar-chart.component';
import { RadialBarChartComponent } from './apex-charts/radial-bar-chart/radial-bar-chart.component';
import { SteplineChartComponent } from './apex-charts/stepline-chart/stepline-chart.component';
import { ChartJSChartComponent } from './chart-js-chart/chart-js-chart.component';
import { ChartjsBarChartComponent } from './chart-js-chart/chartjs-bar-chart/chartjs-bar-chart.component';
import { ChartjsLinechartComponent } from './chart-js-chart/chartjs-linechart/chartjs-linechart.component';
import { DoughnutChartComponent } from './chart-js-chart/doughnut-chart/doughnut-chart.component';
import { LineGraphComponent } from './chart-js-chart/line-graph/line-graph.component';
import { PolarChartComponent } from './chart-js-chart/polar-chart/polar-chart.component';
import { RadarGraphComponent } from './chart-js-chart/radar-graph/radar-graph.component';
import { AdvancedSMILAnimationsComponent } from './chart-lis-chart/advanced-smil-animations/advanced-smil-animations.component';
import { AnimatingADonutWithSvgComponent } from './chart-lis-chart/animating-a-donut-with-svg/animating-a-donut-with-svg.component';
import { BiPolarBarChartComponent } from './chart-lis-chart/bi-polar-bar-chart/bi-polar-bar-chart.component';
import { BiPolarLineChartComponent } from './chart-lis-chart/bi-polar-line-chart/bi-polar-line-chart.component';
import { ChartLisChartComponent } from './chart-lis-chart/chart-lis-chart.component';
import { FilledHolesInDataComponent } from './chart-lis-chart/filled-holes-in-data/filled-holes-in-data.component';
import { HolesInDataComponent } from './chart-lis-chart/holes-in-data/holes-in-data.component';
import { HorizontalBarChartComponent } from './chart-lis-chart/horizontal-bar-chart/horizontal-bar-chart.component';
import { LineChartWithAreaComponent } from './chart-lis-chart/line-chart-with-area/line-chart-with-area.component';
import { SimpleLineChartComponent } from './chart-lis-chart/simple-line-chart/simple-line-chart.component';
import { StackedBarChartComponent } from './chart-lis-chart/stacked-bar-chart/stacked-bar-chart.component';
import { SVGPathAnimationComponent } from './chart-lis-chart/svg-path-animation/svg-path-animation.component';
import { XremeResponsiveConfigurationComponent } from './chart-lis-chart/xreme-responsive-configuration/xreme-responsive-configuration.component';
import { AreaChart1Component } from './google-chart/area-chart1/area-chart1.component';
import { AreaChart2Component } from './google-chart/area-chart2/area-chart2.component';
import { BarChart2Component } from './google-chart/bar-chart2/bar-chart2.component';
import { ColumnChart1Component } from './google-chart/column-chart1/column-chart1.component';
import { ColumnChart2Component } from './google-chart/column-chart2/column-chart2.component';
import { ComboChartComponent } from './google-chart/combo-chart/combo-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { LineChartComponent } from './google-chart/line-chart/line-chart.component';
import { PieChart1Component } from './google-chart/pie-chart1/pie-chart1.component';
import { PieChart2Component } from './google-chart/pie-chart2/pie-chart2.component';
import { PieChart3Component } from './google-chart/pie-chart3/pie-chart3.component';
import { PieChart4Component } from './google-chart/pie-chart4/pie-chart4.component';
import { WordTreeComponent } from './google-chart/word-tree/word-tree.component';


@NgModule({
  declarations: [
    ApexChartsComponent,
    BasicAreaChartComponent,
    AreaSpalineChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    BubbleChartComponent,
    SteplineChartComponent,
    ColumnChartTwoComponent,
    PieChartComponent,
    DonutChartComponent,
    MixedChartComponent,
    CandlestickChartComponent,
    RadarChartComponent,
    RadialBarChartComponent,
    GoogleChartComponent,
    AreaChart1Component,
    AreaChart2Component,
    ColumnChart1Component,
    ColumnChart2Component,
    LineChartComponent,
    ComboChartComponent,
    BarChart2Component,
    WordTreeComponent,
    PieChart1Component,
    PieChart2Component,
    PieChart3Component,
    PieChart4Component,
    ChartJSChartComponent,
    ChartjsBarChartComponent,
    LineGraphComponent,
    RadarGraphComponent,
    ChartjsLinechartComponent,
    DoughnutChartComponent,
    PolarChartComponent,
    ChartLisChartComponent,
    AdvancedSMILAnimationsComponent,
    SVGPathAnimationComponent,
    AnimatingADonutWithSvgComponent,
    BiPolarLineChartComponent,
    LineChartWithAreaComponent,
    BiPolarBarChartComponent,
    StackedBarChartComponent,
    HorizontalBarChartComponent,
    XremeResponsiveConfigurationComponent,
    SimpleLineChartComponent,
    HolesInDataComponent,
    FilledHolesInDataComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    Ng2GoogleChartsModule,
    NgChartsModule,
    ChartistModule,
    SharedModule
  ]
})
export class ChartsModule { }
