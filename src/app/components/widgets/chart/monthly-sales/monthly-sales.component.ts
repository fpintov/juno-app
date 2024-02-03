import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.scss']
})

export class MonthlySalesComponent {

  public monthySales = data.monthySales;

}
