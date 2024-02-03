import { Component } from "@angular/core";

@Component({
  selector: "app-live-alert",
  templateUrl: "./live-alert.component.html",
  styleUrls: ["./live-alert.component.scss"],
})

export class LiveAlertComponent {

  public array: number[] = [];
  public countr: number = 0;

  add() {
    this.countr++;
    this.array.push(this.countr);
  }

  close(data: number) {
    this.array.splice(this.array.indexOf(data), 1);
  }
}
