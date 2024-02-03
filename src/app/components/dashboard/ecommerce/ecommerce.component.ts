import { Component } from "@angular/core";
import * as data from "../../../shared/data/data/dashboard/ecommerce";
import * as ChartData from "../../../shared/data/chart/general/apex-chart";

@Component({
  selector: "app-ecommerce",
  templateUrl: "./ecommerce.component.html",
  styleUrls: ["./ecommerce.component.scss"],
})
export class EcommerceComponent {

  public totalSells = data.totalSells;
  public TotalSellsChart = ChartData.TotalSells;
  public dailyOrders = data.dailyOrders;
  public dailyOrdersChart = ChartData.dailyOrders;
  public ordersValue = data.ordersValue;
  public ordersValueChart = ChartData.ordersValue;
  public dailyRevenue = data.dailyRevenue;
  public dailyRevenueChart = ChartData.dailyRevenue;
  
}
