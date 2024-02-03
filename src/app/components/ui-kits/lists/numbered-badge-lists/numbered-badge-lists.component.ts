import { Component } from '@angular/core';
import { NumberedBadgeLists } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-numbered-badge-lists',
  templateUrl: './numbered-badge-lists.component.html',
  styleUrls: ['./numbered-badge-lists.component.scss']
})

export class NumberedBadgeListsComponent {

  public NumberedBadgeLists = NumberedBadgeLists

}
