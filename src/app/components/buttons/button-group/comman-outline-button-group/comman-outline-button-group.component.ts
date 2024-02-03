import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-comman-outline-button-group',
  templateUrl: './comman-outline-button-group.component.html',
  styleUrls: ['./comman-outline-button-group.component.scss']
})

export class CommanOutlineButtonGroupComponent {

  public commonOutlinedButtonGroupData = Data.commonOutlinedButtonGroupData;


}
