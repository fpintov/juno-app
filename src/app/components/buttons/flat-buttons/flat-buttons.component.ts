import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-flat-buttons',
  templateUrl: './flat-buttons.component.html',
  styleUrls: ['./flat-buttons.component.scss']
})

export class FlatButtonsComponent {

  public flatButtonData = Data.flatButtonData;
  public flatOutlinedButtonsData = Data.flatOutlinedButtonsData;
  public flatGradienButtonData = Data.flatGradienButtonData;

}
