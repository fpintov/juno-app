import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';

@Component({
  selector: 'app-invoice-two',
  templateUrl: './invoice-two.component.html',
  styleUrls: ['./invoice-two.component.scss']
})

export class InvoiceTwoComponent {
  
   public invoice2 = data.invoice2;
}
