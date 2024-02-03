import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-default-switches',
  templateUrl: './default-switches.component.html',
  styleUrls: ['./default-switches.component.scss']
})

export class DefaultSwitchesComponent {

  public defaultswitch = data.defaultswitch;

}
