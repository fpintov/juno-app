import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-table-head-options',
  templateUrl: './table-head-options.component.html',
  styleUrls: ['./table-head-options.component.scss']
})


export class TableHeadOptionsComponent {

  public TableHeadOptions = data.TableHeadOptions;

}
