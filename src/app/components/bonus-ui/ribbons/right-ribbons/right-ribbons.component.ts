import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/ribbons';

@Component({
  selector: 'app-right-ribbons',
  templateUrl: './right-ribbons.component.html',
  styleUrls: ['./right-ribbons.component.scss']
})

export class RightRibbonsComponent {

  public rightRibbonData = Data.rightRibbonData;




}
