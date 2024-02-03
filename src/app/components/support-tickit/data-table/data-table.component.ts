import { Component, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { supportDB } from "../../../shared/data/data/support-tickit/support-tickit";
import {
  SortEvent,
  SupportTicketDirective,
} from "../../../shared/directive/support-ticket.directive";
import { SupportTicketService } from "../../../shared/services/support-ticket.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent {
  public countries$: Observable<supportDB[]>;
  public total$: Observable<number>;
  public supportData: supportDB[];

  @ViewChildren(SupportTicketDirective)
  headers: QueryList<SupportTicketDirective>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.service.support$.subscribe((data) => {
      if (data) {
        this.supportData = data;
      }
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
