import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-basic-timeline',
  templateUrl: './basic-timeline.component.html',
  styleUrls: ['./basic-timeline.component.scss']
})

export class BasicTimelineComponent {

  public basicTimelineData = Data.basicTimelineData;

}
