import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/dashboard';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent {

  public isShow:boolean = false;
  public Notifications = data.notifications;

  clickOutside(): void {
    this.isShow = false;
  }

}
