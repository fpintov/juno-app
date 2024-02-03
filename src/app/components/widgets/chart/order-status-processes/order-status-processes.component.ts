import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-order-status-processes',
  templateUrl: './order-status-processes.component.html',
  styleUrls: ['./order-status-processes.component.scss']
})

export class OrderStatusProcessesComponent {

  public orderStatusProcesses = data.orderStatusProcesses

}
