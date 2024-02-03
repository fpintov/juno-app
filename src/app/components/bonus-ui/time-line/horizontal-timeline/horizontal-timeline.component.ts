import { Component } from '@angular/core';
import { horizontialTimelineData } from '../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-horizontal-timeline',
  templateUrl: './horizontal-timeline.component.html',
  styleUrls: ['./horizontal-timeline.component.scss']
})

export class HorizontalTimelineComponent {

  public horizontialTimelineData = horizontialTimelineData;

}
