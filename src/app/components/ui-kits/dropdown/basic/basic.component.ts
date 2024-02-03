import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

export class BasicComponent {

  public basicDropdownData = Data.basicDropdownData;

}
