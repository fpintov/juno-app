import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';

@Component({
  selector: 'app-invoice-one',
  templateUrl: './invoice-one.component.html',
  styleUrls: ['./invoice-one.component.scss']
})

export class InvoiceOneComponent {

  public invoice1 =  data.invoice1;

}
