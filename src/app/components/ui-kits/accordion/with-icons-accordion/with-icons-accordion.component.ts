import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-with-icons-accordion',
  templateUrl: './with-icons-accordion.component.html',
  styleUrls: ['./with-icons-accordion.component.scss']
})

export class WithIconsAccordionComponent {

  public accordionWithIconData = Data.accordionWithIconData;


}
