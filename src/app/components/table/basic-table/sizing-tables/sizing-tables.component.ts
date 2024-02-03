import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-sizing-tables',
  templateUrl: './sizing-tables.component.html',
  styleUrls: ['./sizing-tables.component.scss']
})

export class SizingTablesComponent {

  public sizingTable = data.sizingTable;
  
}
