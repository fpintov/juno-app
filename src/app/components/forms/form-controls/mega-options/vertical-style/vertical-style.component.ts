import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-vertical-style',
  templateUrl: './vertical-style.component.html',
  styleUrls: ['./vertical-style.component.scss']
})

export class VerticalStyleComponent {

   public verticalStyle = data.verticalStyle;
   public buyingOptionVertical = data.buyingOptionVertical;

}
