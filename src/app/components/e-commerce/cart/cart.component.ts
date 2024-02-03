import { Component } from '@angular/core';
 import * as data from '../../../shared/data/data/ecommerce/ecommerce';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  public cartItem = data.cartItem;

  public increment(item: number) {
    this.cartItem[item].counter += 1;
  }

  public decrement(item: number) {
    if (this.cartItem[item].counter > 1) {
      this.cartItem[item].counter -= 1
    }
  }

}
