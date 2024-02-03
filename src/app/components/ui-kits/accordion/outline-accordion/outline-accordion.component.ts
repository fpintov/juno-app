import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-outline-accordion',
  templateUrl: './outline-accordion.component.html',
  styleUrls: ['./outline-accordion.component.scss']
})

export class OutlineAccordionComponent {

  public simpleAccordionData = Data.simpleAccordionData;

}
