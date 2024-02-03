import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PricingComponent } from './pricing/pricing.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'add-products',
        component: AddProductComponent,
        data: {
          title: 'Add Product',
          breadcrumb: 'Add Product',
        }
      },
      {
        path: 'products',
        component: ProductComponent,
        data: {
          title: 'Product',
          breadcrumb: 'Product',
        }
      },
      {
        path: 'product-page',
        component: ProductPageComponent,
        data: {
          title: 'Product Page',
          breadcrumb: 'Product Page',
        }
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        data: {
          title: 'Product list',
          breadcrumb: 'Product list',
        }
      },
      {
        path: 'payment-detail',
        component: PaymentDetailsComponent,
        data: {
          title: 'Payment Details',
          breadcrumb: 'Payment Details',
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: 'Cart',
          breadcrumb: 'Cart',
        }
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        data: {
          title: 'Wishlist',
          breadcrumb: 'Wishlist',
        }
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          title: 'Checkout',
          breadcrumb: 'Checkout',
        }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: {
          title: 'Pricing',
          breadcrumb: 'Pricing',
        }
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        data: {
          title: 'Recent Orders',
          breadcrumb: 'Recent Orders',
        }
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
