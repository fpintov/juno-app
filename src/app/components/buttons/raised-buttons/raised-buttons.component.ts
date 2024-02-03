import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-raised-buttons',
  templateUrl: './raised-buttons.component.html',
  styleUrls: ['./raised-buttons.component.scss']
})

export class RaisedButtonsComponent {

 public raisedButtonData= Data.raisedButtonData;
  public raisedOutlinedButtonsData= Data.raisedOutlinedButtonsData;
  public raisedGradienButtonData= Data.raisedGradienButtonData;
}
