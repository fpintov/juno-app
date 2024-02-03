import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/progres-bar';

@Component({
  selector: 'app-basic-progress-bars',
  templateUrl: './basic-progress-bars.component.html',
  styleUrls: ['./basic-progress-bars.component.scss']
})

export class BasicProgressBarsComponent {

  public basicProgressBarData = data.basicProgressBarData;

}
