import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-crypto-annotations',
  templateUrl: './crypto-annotations.component.html',
  styleUrls: ['./crypto-annotations.component.scss']
})

export class CryptoAnnotationsComponent {

  public cryptoAnotation = data.cryptoAnotation

}
