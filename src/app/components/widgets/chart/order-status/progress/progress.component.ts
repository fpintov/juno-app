import { Component, Input } from '@angular/core';
import * as data from  '../../../../../shared/data/chart/widgets/apex-chart';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent {

   @Input() data:  data.ChartOptions | any;

}
