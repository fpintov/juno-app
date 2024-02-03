import { Component, Input, SimpleChanges } from "@angular/core";
import * as data from "../../../shared/data/data/contacts/contacts";

@Component({
  selector: "app-contacts-data",
  templateUrl: "./contacts-data.component.html",
  styleUrls: ["./contacts-data.component.scss"],
})

export class ContactsDataComponent {

  @Input() activeStatus: boolean;
  @Input() selectedId: number;
  public personal = data.personal;
  public Organization = data.Organization;
  public getTaskData: data.contectData;
  public open: boolean = false;
  public profileData: data.profileDataList;

  ngOnInit() {
    this.personal.map((data) => {
      if (data.status) {
        this.getTaskData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let persnol_Id = changes["selectedId"]?.currentValue;
    this.personal.map((data) => {
      if (data.title_id === persnol_Id) {
        this.getTaskData = data;
      }
    });

    let oragnization_Id = changes["selectedId"]?.currentValue;
    this.Organization.map((data) => {
      if (data.title_id === oragnization_Id) {
        this.getTaskData = data;
      }
    });
  }

  changeData(list: data.profileDataList) {
    this.profileData = list;
    if (!list.status) {
      this.getTaskData.data.forEach((a: data.profileDataList) => {
        a.status = false;
      });
    }
    list.status = !list.status;
  }
}
