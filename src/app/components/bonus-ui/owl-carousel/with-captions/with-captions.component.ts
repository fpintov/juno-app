import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-with-captions',
  templateUrl: './with-captions.component.html',
  styleUrls: ['./with-captions.component.scss']
})

export class WithCaptionsComponent {

  public withIndicatorOptions = Data.withIndicatorOptions;
  public withCaptionData = Data.withCaptionData;

}
