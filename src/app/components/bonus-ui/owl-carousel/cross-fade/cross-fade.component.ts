import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-cross-fade',
  templateUrl: './cross-fade.component.html',
  styleUrls: ['./cross-fade.component.scss']
})

export class CrossFadeComponent {

  public crossFadeOptions = Data.crossFadeOptions;
  public crossFadeData = Data.crossFadeData;

}
