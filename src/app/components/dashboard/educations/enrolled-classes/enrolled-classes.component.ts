import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/education";

@Component({
  selector: "app-enrolled-classes",
  templateUrl: "./enrolled-classes.component.html",
  styleUrls: ["./enrolled-classes.component.scss"],
})

export class EnrolledClassesComponent {

  public isShow: boolean = false;
  public openId: number;
  public enrolledClasses = data.enrolledClasses;

  open(id: number) {
    this.enrolledClasses.filter((data) => {
      if (data.id == id) {
        this.openId = this.openId !== data.id ? data.id : 0;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
