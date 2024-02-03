import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-custom-switch',
  templateUrl: './custom-switch.component.html',
  styleUrls: ['./custom-switch.component.scss']
})

export class CustomSwitchComponent {

  public defaultSwitchData = data.defaultSwitch;

}
