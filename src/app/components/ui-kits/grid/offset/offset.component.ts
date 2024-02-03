import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-offset',
  templateUrl: './offset.component.html',
  styleUrls: ['./offset.component.scss']
})

export class OffsetComponent {

  public offsetGridData = Data.offsetGridData;

}
