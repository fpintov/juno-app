import { Component } from '@angular/core';
import  * as data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})

export class CustomRadioComponent {

  public BorderedRadio = data.BorderedRadio;
  public IconsRadio = data.IconsRadio;
  public FilledRadio = data.FilledRadio;

}
