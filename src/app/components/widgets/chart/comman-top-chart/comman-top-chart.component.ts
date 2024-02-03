import { Component, Input } from '@angular/core';
import  * as data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-comman-top-chart',
  templateUrl: './comman-top-chart.component.html',
  styleUrls: ['./comman-top-chart.component.scss']
})

export class CommanTopChartComponent {

   @Input() item : data.ChartOptions | any;

}
