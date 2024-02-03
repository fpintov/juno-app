import { Component, QueryList, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { productListInterface } from "../../../shared/data/data/ecommerce/product-list";
import { ProductListSortableDirective, SortEvent} from "../../../shared/directive/product-list-sortable.directive";
import { ProductListService } from "../../../shared/services/product-list.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
  public isShow: boolean = false;
  public productList$: Observable<productListInterface[]>;
  public productList: productListInterface[] = [];
  public total$: Observable<number>;

  @ViewChildren(ProductListSortableDirective)
  public headers: QueryList<ProductListSortableDirective>;

  constructor(public service: ProductListService) {
    this.productList$ = service.productList$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.service.productList$.subscribe((data) => {
      if (data) {
        this.productList = data;
      }
    });
  }

  tiggle() {
    this.isShow = !this.isShow;
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
