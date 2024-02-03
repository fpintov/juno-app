import { Component } from '@angular/core';
import * as Data from "../../../../shared/data/data/buttons/buttons";

@Component({
  selector: 'app-check-box-button-group',
  templateUrl: './check-box-button-group.component.html',
  styleUrls: ['./check-box-button-group.component.scss']
})

export class CheckBoxButtonGroupComponent {

  public buttonData  = Data.checkBoxData;

}
