import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';


@Component({
  selector: 'app-flush-accordion',
  templateUrl: './flush-accordion.component.html',
  styleUrls: ['./flush-accordion.component.scss']
})

export class FlushAccordionComponent {

  public flushAccordionData = Data.flushAccordionData;


}
