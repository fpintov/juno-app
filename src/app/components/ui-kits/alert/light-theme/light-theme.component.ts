import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-light-theme',
  templateUrl: './light-theme.component.html',
  styleUrls: ['./light-theme.component.scss']
})

export class LightThemeComponent {

  public lightThemeAlertData = Data.lightThemeAlertData;

}
