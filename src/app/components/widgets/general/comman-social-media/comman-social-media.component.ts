import { Component, Input } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart'
@Component({
  selector: 'app-comman-social-media',
  templateUrl: './comman-social-media.component.html',
  styleUrls: ['./comman-social-media.component.scss']
})

export class CommanSocialMediaComponent {
 
   @Input() item : data.ChartOptions | any;
}
