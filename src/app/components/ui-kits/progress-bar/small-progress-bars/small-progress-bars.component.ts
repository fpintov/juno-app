import { Component } from '@angular/core';
import { smallProgressBarData } from '../../../../shared/data/data/ui-kits/progres-bar';

@Component({
  selector: 'app-small-progress-bars',
  templateUrl: './small-progress-bars.component.html',
  styleUrls: ['./small-progress-bars.component.scss']
})

export class SmallProgressBarsComponent {

  public smallProgressBarData = smallProgressBarData;


}
