import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})

export class ListsComponent {

  public commanListData = data.commanList;

}
