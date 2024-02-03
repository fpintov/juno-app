import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-dropdown-sizing',
  templateUrl: './dropdown-sizing.component.html',
  styleUrls: ['./dropdown-sizing.component.scss']
})

export class DropdownSizingComponent {

  public sizingDropdownData = Data.sizingDropdownData;

}
