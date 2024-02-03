import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-variation-checkbox',
  templateUrl: './variation-checkbox.component.html',
  styleUrls: ['./variation-checkbox.component.scss']
})

export class VariationCheckboxComponent {

  public variationCheckbox = data.variationCheckbox;
  public themeSale = data.themeSale;

}
