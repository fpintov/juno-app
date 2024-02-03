import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';


@Component({
  selector: 'app-hoverable-rows-border',
  templateUrl: './hoverable-rows-border.component.html',
  styleUrls: ['./hoverable-rows-border.component.scss']
})

export class HoverableRowsBorderComponent {

  public hoverableRowsBorder = data.hoverableRowsBorder;

}
