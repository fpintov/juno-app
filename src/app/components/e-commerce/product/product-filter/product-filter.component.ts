import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as data from "../../../../shared/data/data/ecommerce/ecommerce";
import { Options } from "ngx-slider-v2";
import * as datas from "../../../../shared/data/data/ecommerce/ecommerce";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-product-filter",
  templateUrl: "./product-filter.component.html",
  styleUrls: ["./product-filter.component.scss"],
})

export class ProductFilterComponent {

  public filterData = data.filterData;
  public maxvalue: number = 70;
  public value2: number = 100;
  public rating = 2.6;
  public productFilter = datas.productFilter;

  @Input() show: boolean;
  @Output() childEvent = new EventEmitter();

  public options: Options = {
    floor: 0,
    ceil: 200,
  };

  public customOptions: OwlOptions = {
    items: 1,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  };

  Outside(value: boolean) {
    value = false;
    this.childEvent.emit(value);
  }
}
