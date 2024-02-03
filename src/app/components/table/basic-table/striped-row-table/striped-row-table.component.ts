import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-striped-row-table',
  templateUrl: './striped-row-table.component.html',
  styleUrls: ['./striped-row-table.component.scss']
})

export class StripedRowTableComponent {

  public stripedRowTable = data.stripedRowTable;

}
