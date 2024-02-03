import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-cryptocurrency-prices',
  templateUrl: './cryptocurrency-prices.component.html',
  styleUrls: ['./cryptocurrency-prices.component.scss']
})

export class CryptocurrencyPricesComponent {

   public cryptoCurrencyPrices = data.cryptoCurrencyPrices
}
