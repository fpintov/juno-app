import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})

export class OrderStatusComponent {

  public isShow:boolean = false;

  public progress1 = data.progress1;
  public progress2 = data.progress2;
  public progress3 = data.progress3;
  public progress4 = data.progress4;
  public progress5 = data.progress5;
  
}
