import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent {

  public defaultButtonsData = Data.defaultButtonsData;
  public outlinedButtonsData = Data.outlinedButtonsData;
  public gradienButtonData = Data.gradienButtonData;

}
