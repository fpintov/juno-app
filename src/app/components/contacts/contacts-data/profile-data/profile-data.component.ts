import { Component, Input, SimpleChanges, ViewChild } from "@angular/core";
import Swal from "sweetalert2";
import { PrintComponent } from "../../modal/print/print.component";
import * as data from "../../../../shared/data/data/contacts/contacts";

@Component({
  selector: "app-profile-data",
  templateUrl: "./profile-data.component.html",
  styleUrls: ["./profile-data.component.scss"],
})

export class ProfileDataComponent {
  
  public editContact: boolean = false;
  public personal = data.personal;
  public Organization = data.Organization;
  public statusData: data.contectData;
  public open: boolean = false;
  @Input() profileData: data.profileDataList;
  @Input() getTaskData: data.contectData;

  @ViewChild("printModal") PrintModal: PrintComponent;

  ngOnInit() {
    this.personal.map((data) => {
      if (data.status) {
        this.statusData = data;
      }
      const listnewData = this.statusData.data;
      const currentData = listnewData.filter((data: { status: boolean }) => {
        return data.status === true;
      });
      this.profileData = currentData[0];
    });
  }

  openHistory() {
    this.open = !this.open;
  }

  deleteContact() {
    Swal.fire({
      text: "This contact will be deleted from your Personal Contacts and from the chat list too.",
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#EFEFEE !important",
      confirmButtonColor: "var(--theme-deafult)",
    }).then((result: { isConfirmed: boolean; isDenied: boolean }) => {
      if (result.isConfirmed) {
      } else {
        Swal.fire("", "Your contact is safe!");
      }
    });
  }
}
