import { Component } from '@angular/core';
import * as Data from "../../../../shared/data/data/buttons/buttons";

@Component({
  selector: 'app-common-large-button-group',
  templateUrl: './common-large-button-group.component.html',
  styleUrls: ['./common-large-button-group.component.scss']
})

export class CommonLargeButtonGroupComponent {

  public commonLargeButtonGroupData = Data.commonLargeButtonGroupData;

}
