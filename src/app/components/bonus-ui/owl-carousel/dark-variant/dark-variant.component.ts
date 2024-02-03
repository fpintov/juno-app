import { Component } from '@angular/core';
import { darkVariantData  , withIndicatorOptions} from '../../../../shared/data/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-dark-variant',
  templateUrl: './dark-variant.component.html',
  styleUrls: ['./dark-variant.component.scss']
})

export class DarkVariantComponent {

  public darkVariantData = darkVariantData;
  public withIndicatorOptions =withIndicatorOptions;

}
