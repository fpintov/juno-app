import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-default-radio',
  templateUrl: './default-radio.component.html',
  styleUrls: ['./default-radio.component.scss']
})

export class DefaultRadioComponent {

  public defaultRedio = data.defaultRedio;

}
