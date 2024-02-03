import { Component } from '@angular/core';
import { pieChart3 } from '../../../../shared/data/chart/charts/google-chart';

@Component({
  selector: 'app-pie-chart3',
  templateUrl: './pie-chart3.component.html',
  styleUrls: ['./pie-chart3.component.scss']
})
export class PieChart3Component {
  public pieChart3 = pieChart3;

}
