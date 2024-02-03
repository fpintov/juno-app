import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-font-width-helper',
  templateUrl: './font-width-helper.component.html',
  styleUrls: ['./font-width-helper.component.scss']
})

export class FontWidthHelperComponent {

  public FontWeight = data.FontWeight;

}
