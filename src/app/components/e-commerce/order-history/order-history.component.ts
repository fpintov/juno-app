import { Component, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import * as data from "../../../shared/data/data/ecommerce/order-history";
import {
  SortEvent,
  orderHistoraySortableDirective,
} from "../../../shared/directive/order-historay-sortable.directive";
import { OrderHistoryService } from "../../../shared/services/order-history.service";

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.scss"],
})
export class OrderHistoryComponent {
  public isShow: boolean = false;
  public orderHistoryData$: Observable<data.orderTable[]>;
  public total$: Observable<number>;
  public orderHistory = data.orderHistory;
  public orderTableData = data.orderTableData;
  public orderList: data.orderTable[];

  @ViewChildren(orderHistoraySortableDirective)
  public headers: QueryList<orderHistoraySortableDirective>;
  constructor(public orderHistoryService: OrderHistoryService) {
    this.orderHistoryData$ = orderHistoryService.orderList$;
    this.total$ = orderHistoryService.total$;
  }

  ngOnInit() {
    this.orderHistoryService.orderList$.subscribe((data) => {
      if (data) {
        this.orderList = data;
      }
    });
  }

  cancelOrder(index: number, id: number) {
    this.orderHistory.forEach((data) => {
      data.data.forEach((element) => {
        if (element.id == id) {
          data.data.splice(index, 1);
        }
      });
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortableOrder !== column) {
        header.direction = "";
      }
    });
    this.orderHistoryService.sortColumn = column;
    this.orderHistoryService.sortDirection = direction;
  }
}
