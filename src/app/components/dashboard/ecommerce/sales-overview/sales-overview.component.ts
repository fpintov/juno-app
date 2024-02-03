import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';

@Component({
  selector: 'app-sales-overview',
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.scss']
})

export class SalesOverviewComponent {
   
  public isShow : boolean = false;
  public salesOverview = data.salesOverview;

   clickOutside(): void {
    this.isShow = false;
  }

}
