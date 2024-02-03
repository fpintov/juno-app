import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid';


@Component({
  selector: 'app-grid-options',
  templateUrl: './grid-options.component.html',
  styleUrls: ['./grid-options.component.scss']
})

export class GridOptionsComponent {

  public gridOptionData = Data.gridOptionData;
  public gridOptionData2 = Data.gridOptionData2;
  public gridOptionData3 = Data.gridOptionData3;

}
