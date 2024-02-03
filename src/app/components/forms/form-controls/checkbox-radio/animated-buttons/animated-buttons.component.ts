import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-animated-buttons',
  templateUrl: './animated-buttons.component.html',
  styleUrls: ['./animated-buttons.component.scss']
})

export class AnimatedButtonsComponent {

  public animatedButtons = data.animatedButtons;

}
