import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-slides-only',
  templateUrl: './slides-only.component.html',
  styleUrls: ['./slides-only.component.scss']
})

export class SlidesOnlyComponent {

  public slidesOnlyOptions = Data.slidesOnlyOptions;
  public slidesOnlyData = Data.slidesOnlyData;

}
