import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/education";
@Component({
  selector: "app-assignments",
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.scss"],
})
export class AssignmentsComponent {

  public isShow: boolean = false;
  public Assignments = data.Assignments;
  public openId: string;

  open(id: string) {
    this.Assignments.filter((datas) => {
      if (datas.id == id) {
        this.openId = this.openId !== datas.id ? datas.id : '';
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
