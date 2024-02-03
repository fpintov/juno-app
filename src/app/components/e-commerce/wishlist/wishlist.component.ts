import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/ecommerce/ecommerce'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent {
  public wishList = data.wishlist
}
