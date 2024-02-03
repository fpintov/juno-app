import { Component } from '@angular/core';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-dismissing-light-alert',
  templateUrl: './dismissing-light-alert.component.html',
  styleUrls: ['./dismissing-light-alert.component.scss']
})

export class DismissingLightAlertComponent {

  public isShow : boolean = true;

}
