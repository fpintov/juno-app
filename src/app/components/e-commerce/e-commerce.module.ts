import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from '../../shared/shared.module';
import { ECommerceRoutingModule } from './e-commerce-routing.module';

import { orderHistoraySortableDirective } from '../../shared/directive/order-historay-sortable.directive';
import { ProductListSortableDirective } from '../../shared/directive/product-list-sortable.directive';
import { ProductListService } from '../../shared/services/product-list.service';
import { OrderHistoryService } from '../../shared/services/order-history.service';
import { AddProductDetailsComponent } from './add-product/add-product-details/add-product-details.component';
import { AddProductTabComponent } from './add-product/add-product-tab/add-product-tab.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdditionalOptionsComponent } from './add-product/advance/additional-options/additional-options.component';
import { AdvanceComponent } from './add-product/advance/advance.component';
import { InventoryComponent } from './add-product/advance/inventory/inventory.component';
import { ShippingComponent } from './add-product/advance/shipping/shipping.component';
import { CreateNewCategoryComponent } from './add-product/product-categories/create-new-category/create-new-category.component';
import { ProductCategoriesComponent } from './add-product/product-categories/product-categories.component';
import { ProductGalleryComponent } from './add-product/product-gallery/product-gallery.component';
import { SellingPricesComponent } from './add-product/selling-prices/selling-prices.component';
import { CartComponent } from './cart/cart.component';
import { BillingDataComponent } from './checkout/billing-data/billing-data.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormDataComponent } from './checkout/form-data/form-data.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CodComponent } from './payment-details/cod/cod.component';
import { CreditCardComponent } from './payment-details/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-details/debit-card/debit-card.component';
import { EmiComponent } from './payment-details/emi/emi.component';
import { NetBankingComponent } from './payment-details/net-banking/net-banking.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrandComponent } from './product-page/brand/brand.component';
import { DescriptionTabComponent } from './product-page/description-tab/description-tab.component';
import { ProductDetailsComponent } from './product-page/product-details/product-details.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ProductShowComponent } from './product/product-show/product-show.component';
import { ProductComponent } from './product/product.component';
import { QuickViewComponent } from './product/quick-view/quick-view.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    AddProductComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductShowComponent,
    QuickViewComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    BrandComponent,
    DescriptionTabComponent,
    ProductListComponent,
    PaymentDetailsComponent,
    CreditCardComponent,
    DebitCardComponent,
    CodComponent,
    EmiComponent,
    NetBankingComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    FormDataComponent,
    BillingDataComponent,
    PricingComponent,
    OrderHistoryComponent,
    AddProductDetailsComponent,
    AddProductTabComponent,
    ProductGalleryComponent,
    ProductCategoriesComponent,
    SellingPricesComponent,
    AdvanceComponent,
    CreateNewCategoryComponent,
    InventoryComponent,
    AdditionalOptionsComponent,
    ShippingComponent,
  ],
  
  imports: [
    orderHistoraySortableDirective,
    ProductListSortableDirective,
    CommonModule,
    ECommerceRoutingModule,
    SharedModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],

  providers: [OrderHistoryService,ProductListService, DecimalPipe],

})
export class ECommerceModule { }
