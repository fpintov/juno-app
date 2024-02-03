import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})

export class FollowersComponent {

  public isCollapsed = false;
  public Followers = data.Followers;

}
