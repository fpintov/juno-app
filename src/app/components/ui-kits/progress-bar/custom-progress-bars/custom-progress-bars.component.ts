import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/progres-bar';

@Component({
  selector: 'app-custom-progress-bars',
  templateUrl: './custom-progress-bars.component.html',
  styleUrls: ['./custom-progress-bars.component.scss']
})

export class CustomProgressBarsComponent {

  public customeProgressData = Data.customeProgressData;


}
