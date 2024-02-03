import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.scss']
})

export class CustomerTransactionComponent {

  public isShow:boolean = false;
  public customerTransaction = data.customerTransaction;

  clickOutside(): void {
    this.isShow = false;
  }
}
