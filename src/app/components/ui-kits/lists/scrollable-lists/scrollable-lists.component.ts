import { Component } from '@angular/core';
import { scrollableListData } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-scrollable-lists',
  templateUrl: './scrollable-lists.component.html',
  styleUrls: ['./scrollable-lists.component.scss']
})

export class ScrollableListsComponent {

  public scrollableListData = scrollableListData;

}
