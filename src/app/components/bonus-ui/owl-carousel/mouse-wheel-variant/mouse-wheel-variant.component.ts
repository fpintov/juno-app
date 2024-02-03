import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-mouse-wheel-variant',
  templateUrl: './mouse-wheel-variant.component.html',
  styleUrls: ['./mouse-wheel-variant.component.scss']
})

export class MouseWheelVariantComponent {


  public autoPlayOptions = Data.autoPlayOptions;
  public autoPlayData = Data.autoPlayData;

}
