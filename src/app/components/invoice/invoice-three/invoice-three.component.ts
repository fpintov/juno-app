import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';

@Component({
  selector: 'app-invoice-three',
  templateUrl: './invoice-three.component.html',
  styleUrls: ['./invoice-three.component.scss']
})

export class InvoiceThreeComponent {
  
   public invoice3 = data.invoice3;

}
