import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';
@Component({
  selector: 'app-basic-table-with-border-bottom-color',
  templateUrl: './basic-table-with-border-bottom-color.component.html',
  styleUrls: ['./basic-table-with-border-bottom-color.component.scss']
})

export class BasicTableWithBorderBottomColorComponent {

   public tableData  = data.basicTableBottomColor;

}
