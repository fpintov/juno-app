import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';

@Component({
  selector: 'app-invoice-five',
  templateUrl: './invoice-five.component.html',
  styleUrls: ['./invoice-five.component.scss']
})

export class InvoiceFiveComponent {

  public invoice4 = data.invoice4;


}
