import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss']
})

export class RadioButtonGroupComponent {

  public buttonData = Data.buttonData;


}
