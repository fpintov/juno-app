import { Component } from '@angular/core';
import * as data  from  '../../../shared/data/data/ecommerce/ecommerce';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})


export class PricingComponent {


  public simplePricingCard = data.simplePricingCard;
  public pricing = data.pricing;

}
