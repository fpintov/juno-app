import { Component, EventEmitter, Output } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateNewCategoryComponent } from "./create-new-category/create-new-category.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-product-categories",
  templateUrl: "./product-categories.component.html",
  styleUrls: ["./product-categories.component.scss"],
})

export class ProductCategoriesComponent {
  
  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 3;
  public validate: boolean = false;
  public items = [];

  constructor(public moda: NgbModal) {}

  myForm = new FormGroup({
    add_Category: new FormControl("", Validators.required),
    add_Tag: new FormControl("", Validators.required),
    publish_Status: new FormControl("", Validators.required),
    publish_Date_Tile: new FormControl("", Validators.required),
  });
  
  category() {
    this.moda.open(CreateNewCategoryComponent, { size: "lg" });
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);                                                                                      
  }
  
  next(myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get addCategory() {
    return this.myForm.get("add_Category");
  }
  get addTag() {
    return this.myForm.get("add_Tag");
  }
  get publishStatus() {
    return this.myForm.get("publish_Status");
  }
  get publishDateTile() {
    return this.myForm.get("publish_Date_Tile");
  }
}
