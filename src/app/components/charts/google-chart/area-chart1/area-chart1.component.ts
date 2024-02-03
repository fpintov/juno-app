import { Component } from '@angular/core';
import { areaChart1 } from '../../../../shared/data/chart/charts/google-chart';

@Component({
  selector: 'app-area-chart1',
  templateUrl: './area-chart1.component.html',
  styleUrls: ['./area-chart1.component.scss']
})

export class AreaChart1Component {

  public areaChart1 = areaChart1;


}
