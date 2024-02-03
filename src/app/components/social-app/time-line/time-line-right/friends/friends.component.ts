import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})

export class FriendsComponent {

  public isCollapsed = false;
  public Friends = data.Friends;

}
