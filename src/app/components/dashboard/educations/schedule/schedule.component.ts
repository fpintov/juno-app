import { Component } from '@angular/core';
import { schedule } from '../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent {

  public isShow: boolean = false;
  public schedule = schedule;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
