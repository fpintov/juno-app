import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/ecommerce';
@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})

export class RecentOrdersComponent {

   public recentOrders = data.recentOrders;
   public isShow : boolean = false;

   clickOutside(): void {
    this.isShow = false;
  }
}
