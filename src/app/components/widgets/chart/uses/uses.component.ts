import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.scss']
})

export class UsesComponent {

  public usesChart = data.usesChart;

}
