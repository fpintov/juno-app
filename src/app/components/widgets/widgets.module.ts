import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DahboardModule } from '../dashboard/dashboard.module';
import { WidgetsRoutingModule } from './widgets-routing.module';

import { ChartComponent } from './chart/chart.component';
import { CommanTopChartComponent } from './chart/comman-top-chart/comman-top-chart.component';
import { CryptoAnnotationsComponent } from './chart/crypto-annotations/crypto-annotations.component';
import { CryptocurrencyPricesComponent } from './chart/cryptocurrency-prices/cryptocurrency-prices.component';
import { FinanceComponent } from './chart/finance/finance.component';
import { LiveProductsComponent } from './chart/live-products/live-products.component';
import { MonthlyHistoryComponent } from './chart/monthly-history/monthly-history.component';
import { MonthlySalesComponent } from './chart/monthly-sales/monthly-sales.component';
import { OrderStatusProcessesComponent } from './chart/order-status-processes/order-status-processes.component';
import { OrderStatusComponent } from './chart/order-status/order-status.component';
import { ProgressComponent } from './chart/order-status/progress/progress.component';
import { SkillStatusComponent } from './chart/skill-status/skill-status.component';
import { StockMarketComponent } from './chart/stock-market/stock-market.component';
import { TurnOverComponent } from './chart/turn-over/turn-over.component';
import { UsesComponent } from './chart/uses/uses.component';
import { CommanSocialMediaComponent } from './general/comman-social-media/comman-social-media.component';
import { GeneralComponent } from './general/general.component';
import { VisitorsComponent } from './general/visitors/visitors.component';
import { WebsiteDesignComponent } from './general/website-design/website-design.component';


@NgModule({
  declarations: [
    GeneralComponent,
    ChartComponent,
    WebsiteDesignComponent,
    VisitorsComponent,
    CommanSocialMediaComponent,
    CommanTopChartComponent,
    MonthlyHistoryComponent,
    SkillStatusComponent,
    OrderStatusComponent,
    ProgressComponent,
    LiveProductsComponent,
    TurnOverComponent,
    CryptocurrencyPricesComponent,
    CryptoAnnotationsComponent,
    StockMarketComponent,
    FinanceComponent,
    OrderStatusProcessesComponent,
    MonthlySalesComponent,
    UsesComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    DahboardModule,
    SharedModule
  ]
})
export class WidgetsModule { }
