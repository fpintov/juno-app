import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-with-indicators',
  templateUrl: './with-indicators.component.html',
  styleUrls: ['./with-indicators.component.scss']
})

export class WithIndicatorsComponent {
  public withIndicatorOptions = Data.withIndicatorOptions;
  public withIndicatorData = Data.withIndicatorData;
}
