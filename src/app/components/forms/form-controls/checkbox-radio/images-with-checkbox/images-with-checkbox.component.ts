import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-images-with-checkbox',
  templateUrl: './images-with-checkbox.component.html',
  styleUrls: ['./images-with-checkbox.component.scss']
})

export class ImagesWithCheckboxComponent {

  public  imagesWithCheckbox = data.imagesWithCheckbox;

}
