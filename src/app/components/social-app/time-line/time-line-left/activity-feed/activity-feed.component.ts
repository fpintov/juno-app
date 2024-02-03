import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})

export class ActivityFeedComponent {

   public isCollapsed = false;
   public activityFeedData = data.activityFeedData;

}
