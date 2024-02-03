import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';3

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})

export class VisitorsComponent {

  public isShow :boolean = false;
  public visitors = data.Visitors;

  clickOutside(): void {
    this.isShow = false;
  }
}
