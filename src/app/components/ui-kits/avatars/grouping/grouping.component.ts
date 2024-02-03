import { Component } from '@angular/core';
import { groupingData } from '../../../../shared/data/data/ui-kits/avatars';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})

export class GroupingComponent {

  public groupingData  = groupingData

}
