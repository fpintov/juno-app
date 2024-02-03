import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-rounded',
  templateUrl: './rounded.component.html',
  styleUrls: ['./rounded.component.scss']
})

export class RoundedComponent {

  public roundedDropdownData = Data.roundedDropdownData;

}
