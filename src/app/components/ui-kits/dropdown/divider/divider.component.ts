import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})

export class DividerComponent {

  public dividerDropdownDtaa = Data.dividerDropdownDtaa;

}
