import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-images-with-radio',
  templateUrl: './images-with-radio.component.html',
  styleUrls: ['./images-with-radio.component.scss']
})

export class ImagesWithRadioComponent {

  public imagesWithRadio = data.imagesWithRadio;
  
}