import { Component } from "@angular/core";
import { addProductTabData } from "../../../shared/data/data/ecommerce/add-product";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})

export class AddProductComponent {

  public addProductTabData = addProductTabData;
  public activeSteps!: number;

  ngOnInit() {
    const data = addProductTabData.filter((data) => {
      return data.steps === 1;
    });

    this.activeSteps = data[0].steps;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
