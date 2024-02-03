import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-play-variant',
  templateUrl: './auto-play-variant.component.html',
  styleUrls: ['./auto-play-variant.component.scss']
})

export class AutoPlayVariantComponent {

  public autoPlayOptions = Data.autoPlayOptions;
  public autoPlayData = Data.autoPlayData;

}
