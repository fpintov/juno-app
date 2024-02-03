import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-common-outline-custom-button-group',
  templateUrl: './common-outline-custom-button-group.component.html',
  styleUrls: ['./common-outline-custom-button-group.component.scss']
})

export class CommonOutlineCustomButtonGroupComponent {

  public commonCustomOutlinedButtonData= Data.commonCustomOutlinedButtonData;
}
