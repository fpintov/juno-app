import { Component } from '@angular/core';
import { chart11 } from '../../../../shared/data/chart/charts/chartlist';

@Component({
  selector: 'app-holes-in-data',
  templateUrl: './holes-in-data.component.html',
  styleUrls: ['./holes-in-data.component.scss']
})

export class HolesInDataComponent {

  public chart11 = chart11;

}
