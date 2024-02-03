import { DecimalPipe } from "@angular/common";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { Table } from "../../../shared/data/data/table/data-table";
import {
  BasicDataTableDirective,
  SortEvent,
} from "../../../shared/directive/basic-data-table.directive";
import { BasicdatatableService } from "../../../shared/services/basicdatatable.service";

@Component({
  selector: "app-data-tables",
  templateUrl: "./data-tables.component.html",
  styleUrls: ["./data-tables.component.scss"],
  providers: [BasicdatatableService, DecimalPipe],
})
export class DataTablesComponent {
  public isShow: boolean = false;
  public basicDataTable$: Observable<Table[]>;
  public total$: Observable<number>;
 public basicData : Table[];
  @ViewChildren(BasicDataTableDirective)
  public headers: QueryList<BasicDataTableDirective>;

  constructor(public service: BasicdatatableService) {
    this.basicDataTable$ = service.basicDataTable$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.service.basicDataTable$.subscribe((data) => {
      if (data) {
         this.basicData = data;
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
