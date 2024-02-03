import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-create-new-category",
  templateUrl: "./create-new-category.component.html",
  styleUrls: ["./create-new-category.component.scss"],
})

export class CreateNewCategoryComponent {

  public htmlContent = "";

  constructor(public modal: NgbModal) {}

  close() {
    this.modal.dismissAll();
  }
}
