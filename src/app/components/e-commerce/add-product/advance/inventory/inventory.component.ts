import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})
export class InventoryComponent {
  @Output() activeSteps = new EventEmitter<number>();
  @Input() activeStep: number;

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
