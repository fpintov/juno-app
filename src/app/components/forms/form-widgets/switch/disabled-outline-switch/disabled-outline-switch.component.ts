import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-disabled-outline-switch',
  templateUrl: './disabled-outline-switch.component.html',
  styleUrls: ['./disabled-outline-switch.component.scss']
})

export class DisabledOutlineSwitchComponent {

  public defaultSwitch = data.defaultSwitch;

}
