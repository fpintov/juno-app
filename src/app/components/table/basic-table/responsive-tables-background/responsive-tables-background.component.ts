import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-responsive-tables-background',
  templateUrl: './responsive-tables-background.component.html',
  styleUrls: ['./responsive-tables-background.component.scss']
})

export class ResponsiveTablesBackgroundComponent {

  public responsiveTablesBackground = data.responsiveTablesBackground;

}
