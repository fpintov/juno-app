import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/progres-bar';

@Component({
  selector: 'app-custom-height-progress',
  templateUrl: './custom-height-progress.component.html',
  styleUrls: ['./custom-height-progress.component.scss']
})

export class CustomHeightProgressComponent {

  public customHeightProgressBarData = data.customHeightProgressBarData;

}
