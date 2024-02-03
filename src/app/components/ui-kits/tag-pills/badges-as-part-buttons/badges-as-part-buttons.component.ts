import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tag-pills';


@Component({
  selector: 'app-badges-as-part-buttons',
  templateUrl: './badges-as-part-buttons.component.html',
  styleUrls: ['./badges-as-part-buttons.component.scss']
})

export class BadgesAsPartButtonsComponent {

  public badgeButtonData = Data.badgeButtonData;


}
