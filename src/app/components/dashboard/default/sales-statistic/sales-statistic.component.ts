import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/dashboard";
import * as chartData from "../../../../shared/data/chart/general/apex-chart";

@Component({
  selector: "app-sales-statistic",
  templateUrl: "./sales-statistic.component.html",
  styleUrls: ["./sales-statistic.component.scss"],
})
export class SalesStatisticComponent {
  
  public isShow: boolean = false;
  public chartData = chartData.salesStatistic;
  public Statistic = data.Statistic;
  public opneId: number;
  public openedId: boolean = false;

  open(id: number) {
    this.Statistic.filter((data) => {
      if (data.id == id) {
        this.opneId = this.opneId !== data.id ? data.id : 0;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
