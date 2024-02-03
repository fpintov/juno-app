import { Component, ViewChild } from "@angular/core";
import { Products } from "../../../../shared/model/product.model";
import { ProductDataService } from "../../../../shared/services/product/product-data.service";
import { ProductService } from "../../../../shared/services/product/product.service";
import { QuickViewComponent } from "../quick-view/quick-view.component";

@Component({
  selector: "app-product-show",
  templateUrl: "./product-show.component.html",
  styleUrls: ["./product-show.component.scss"],
})

export class ProductShowComponent {

  public getProductData: Products[] = [];

  @ViewChild("viewModel") viewModel:  QuickViewComponent;

  constructor(
    private productDataServices: ProductDataService,
    private productService: ProductService
  ) {}

  public sidebaron: boolean = false;
  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;
  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  ngOnInit(): void {
    this.productDataServices.products().subscribe((data) => {
      if (data) {
        this.getProductData = data;
      }
    });
  }

  ngDoCheck() {
    this.col_xl_12 = this.productService.col_xl_12;
    this.col_xl_2 = this.productService.col_xl_2;
    this.col_sm_3 = this.productService.col_xl_12;
    this.col_xl_3 = this.productService.col_xl_3;
    this.xl_4 = this.productService.xl_4;
    this.col_sm_4 = this.productService.col_sm_4;
    this.col_xl_4 = this.productService.col_xl_4;
    this.col_sm_6 = this.productService.col_sm_6;
    this.col_xl_6 = this.productService.col_xl_6;
  }
}
