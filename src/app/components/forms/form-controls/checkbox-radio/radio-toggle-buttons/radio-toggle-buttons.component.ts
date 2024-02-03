import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-radio-toggle-buttons',
  templateUrl: './radio-toggle-buttons.component.html',
  styleUrls: ['./radio-toggle-buttons.component.scss']
})

export class RadioToggleButtonsComponent {

  public RadioToggleButtons = data.RadioToggleButtons;

}
