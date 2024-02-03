import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';

@Component({
  selector: 'app-justify-contents',
  templateUrl: './justify-contents.component.html',
  styleUrls: ['./justify-contents.component.scss']
})

export class JustifyContentsComponent {

  public justifyDropdownData = Data.justifyDropdownData;

}
