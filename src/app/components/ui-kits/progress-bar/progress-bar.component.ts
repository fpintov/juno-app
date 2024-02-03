import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ui-kits/progres-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent {

  public stripedData = Data.stripedData;
  public stripedAnimatedData = Data.stripedAnimatedData;

}
