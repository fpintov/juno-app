import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/dashboard";

@Component({
  selector: "app-projects-data-table",
  templateUrl: "./projects-data-table.component.html",
  styleUrls: ["./projects-data-table.component.scss"],
})

export class ProjectsDataTableComponent {

  public openId: number;
  public isShowData: boolean = false;
  public tableData = data.tableData;

  openMenu(id : number){
    this.tableData.filter((data) => {
      if (data.id == id) {
        this.openId = this.openId !== data.id ? data.id : 0;
      }
    });
  }

  clickOutside(): void {
    this.isShowData = false;

  }

}
