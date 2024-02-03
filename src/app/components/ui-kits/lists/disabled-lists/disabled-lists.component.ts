import { Component } from '@angular/core';
import * as data  from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-disabled-lists',
  templateUrl: './disabled-lists.component.html',
  styleUrls: ['./disabled-lists.component.scss']
})

export class DisabledListsComponent {

  public disableData = data.disable;

}
