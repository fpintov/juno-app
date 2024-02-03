import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/ecommerce";

@Component({
  selector: "app-recent-customers",
  templateUrl: "./recent-customers.component.html",
  styleUrls: ["./recent-customers.component.scss"],
})

export class RecentCustomersComponent {

  public isShow: boolean = false;
  public recentCustomers = data.recentCustomers;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
