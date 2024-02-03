import { Component } from '@angular/core';
import { largeProgressBarData } from '../../../../shared/data/data/ui-kits/progres-bar';

@Component({
  selector: 'app-large-progress-bars',
  templateUrl: './large-progress-bars.component.html',
  styleUrls: ['./large-progress-bars.component.scss']
})

export class LargeProgressBarsComponent {

  public largeProgressBarData = largeProgressBarData;


}
