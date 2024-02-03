import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {

  public IconSwitchButton = data.iconSwitchButton;
  public uncheckedSwitchButton = data.uncheckedSwitch;
  public borderedIconButton = data.borderWithIcon;

}
