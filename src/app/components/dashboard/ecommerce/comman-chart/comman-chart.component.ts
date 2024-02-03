import { Component, Input } from "@angular/core";
import * as data from  '../../../../shared/data/data/dashboard/ecommerce';
import {commanTopData} from '../../../../shared/data/data/dashboard/ecommerce';

@Component({
  selector: "app-comman-chart",
  templateUrl: "./comman-chart.component.html",
  styleUrls: ["./comman-chart.component.scss"],
})

export class CommanChartComponent {

  public isShow: boolean = false;
  @Input() chatData:commanTopData | any;
  @Input() item: data.commanTopData[];

  clickOutside(): void {
    this.isShow = false;
  }

}
