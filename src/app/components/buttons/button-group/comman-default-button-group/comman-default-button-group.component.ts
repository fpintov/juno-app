import { Component } from '@angular/core';
import * as Data from "../../../../shared/data/data/buttons/buttons";

@Component({
  selector: 'app-comman-default-button-group',
  templateUrl: './comman-default-button-group.component.html',
  styleUrls: ['./comman-default-button-group.component.scss']
})

export class CommanDefaultButtonGroupComponent {

  public commonDefaultButtonGroupData = Data.commonDefaultButtonGroupData;


}
