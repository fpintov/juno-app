import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-result-modal",
  templateUrl: "./result-modal.component.html",
  styleUrls: ["./result-modal.component.scss"],
})

export class ResultModalComponent {
  constructor(private modal: NgbModal) {}

  close() {
    this.modal.dismissAll();
  }
}
