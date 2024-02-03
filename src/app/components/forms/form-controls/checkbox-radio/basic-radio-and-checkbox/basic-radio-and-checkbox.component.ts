import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-basic-radio-and-checkbox',
  templateUrl: './basic-radio-and-checkbox.component.html',
  styleUrls: ['./basic-radio-and-checkbox.component.scss']
})


export class BasicRadioAndCheckboxComponent {

  public basicRadioAndCheckbox = Data.basicRadioAndCheckbox;

}
