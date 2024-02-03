import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/basic-card';

@Component({
  selector: 'app-absolute-card',
  templateUrl: './absolute-card.component.html',
  styleUrls: ['./absolute-card.component.scss']
})

export class AbsoluteCardComponent {

  public commonAbsoluteCardData = Data.commonAbsoluteCardData;


}
