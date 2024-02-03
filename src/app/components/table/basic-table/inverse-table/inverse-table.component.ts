import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';


@Component({
  selector: 'app-inverse-table',
  templateUrl: './inverse-table.component.html',
  styleUrls: ['./inverse-table.component.scss']
})

export class InverseTableComponent {

  public tableInvoice = data.tableInvoice;

}
