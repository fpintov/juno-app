import { Component } from '@angular/core';
import * as data from "../../../shared/data/data/widgets/general";
import * as ChartData from "../../../shared/data/chart/general/apex-chart";
import * as ChartDataSeocial from "../../../shared/data/chart/widgets/apex-chart";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent {

  public totalSells = data.totalSells;
  public TotalSellsChart = ChartData.TotalSells;
  public dailyOrders = data.dailyOrders;
  public dailyOrdersChart = ChartData.dailyOrders;
  public ordersValue = data.ordersValue;
  public ordersValueChart = ChartData.ordersValue;
  public dailyRevenue = data.dailyRevenue;
  public dailyRevenueChart = ChartData.dailyRevenue;
  public FacebookChart = ChartDataSeocial.FacebookChart;
  public InstagramChart = ChartDataSeocial.InstagramChart;
  public TwitterChart = ChartDataSeocial.TwitterChart;
  public YoutubeChart = ChartDataSeocial.YoutubeChart;

}
