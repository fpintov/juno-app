import { Component } from '@angular/core';
import * as data  from '../../../../shared/data/data/invoice/invoice';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})

export class InvoiceTableComponent {
  
  public invoice6 =  data.invoice6;

}
