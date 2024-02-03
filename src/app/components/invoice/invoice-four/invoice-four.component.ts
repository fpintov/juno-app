import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';

@Component({
  selector: 'app-invoice-four',
  templateUrl: './invoice-four.component.html',
  styleUrls: ['./invoice-four.component.scss']
})


export class InvoiceFourComponent {

   public invoice4 = data.invoice4;
   
}
