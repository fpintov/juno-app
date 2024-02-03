import { Component } from '@angular/core';

@Component({
  selector: 'app-live-meeting',
  templateUrl: './live-meeting.component.html',
  styleUrls: ['./live-meeting.component.scss']
})

export class LiveMeetingComponent {

  public isShow :boolean = false;
  
  clickOutside(): void {
    this.isShow = false;
  }
}
