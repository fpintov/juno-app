import { Component } from '@angular/core';
import * as data from "../../../../shared/data/chart/general/apex-chart";

@Component({
  selector: 'app-actively-hours',
  templateUrl: './actively-hours.component.html',
  styleUrls: ['./actively-hours.component.scss']
})

export class ActivelyHoursComponent {

  public isShow : boolean = false;
  public activelyHours = data.activelyHours;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
