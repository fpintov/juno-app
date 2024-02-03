import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-selling-prices",
  templateUrl: "./selling-prices.component.html",
  styleUrls: ["./selling-prices.component.scss"],
})

export class SellingPricesComponent {
  
  @Output() activeSteps = new EventEmitter<number>();

  public activeStep: number = 4;
  public validate: boolean = false;

  myForm = new FormGroup({
    initial_Cost: new FormControl("", Validators.required),
    selling_Price: new FormControl("", Validators.required),
    choose_Your_Currency: new FormControl("", Validators.required),
    product_Stocks: new FormControl("", Validators.required),
  });

  next(myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
     }
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
    
  }

  get initialCost() {
    return this.myForm.get("initial_Cost");
  }
  get sellingPrice() {
    return this.myForm.get("selling_Price");
  }
  get chooseYourCurrency() {
    return this.myForm.get("choose_Your_Currency");
  }
  get productStocks() {
    return this.myForm.get("product_Stocks");
  }


}
