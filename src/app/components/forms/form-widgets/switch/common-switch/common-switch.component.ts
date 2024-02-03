import { Component, Input } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-common-switch',
  templateUrl: './common-switch.component.html',
  styleUrls: ['./common-switch.component.scss']
})

export class CommonSwitchComponent {

  @Input() data : data.commonSwitch [];

}
