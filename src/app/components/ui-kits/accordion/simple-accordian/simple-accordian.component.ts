import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-simple-accordian',
  templateUrl: './simple-accordian.component.html',
  styleUrls: ['./simple-accordian.component.scss']
})

export class SimpleAccordianComponent {

  public simpleAccordionData = Data.simpleAccordionData;

}
