import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-horizontal-style',
  templateUrl: './horizontal-style.component.html',
  styleUrls: ['./horizontal-style.component.scss']
})

export class HorizontalStyleComponent {

  public deliveryOption = data.deliveryOption;
  public buyingOption = data.buyingOption;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
