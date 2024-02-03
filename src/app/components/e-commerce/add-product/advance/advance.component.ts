import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-advance",
  templateUrl: "./advance.component.html",
  styleUrls: ["./advance.component.scss"],
})

export class AdvanceComponent {

  public activeTab = "inventory";
  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 5;

  changeTab(value: string) {
    this.activeTab = value;
  }

  receiveChildData(step: number) {
    this.activeSteps.emit(step);
  }

}
