import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-shifts-overview',
  templateUrl: './shifts-overview.component.html',
  styleUrls: ['./shifts-overview.component.scss']
})

export class ShiftsOverviewComponent {

  public isShow : boolean = false;
  public isLocation: boolean = false;
  public shiftsOverview = data.shiftsOverview;

  clickOutside(){
    this.isLocation = false;
  }

  clickOutsides(){
    this.isShow = false;
  }
  
}
