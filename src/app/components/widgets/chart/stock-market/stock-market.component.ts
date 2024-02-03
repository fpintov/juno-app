import { Component } from '@angular/core';
import * as  data from '../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})

export class StockMarketComponent {

   public stokeMarket = data.stokeMarket;
   
}
