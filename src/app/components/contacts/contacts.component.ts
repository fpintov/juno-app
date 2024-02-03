import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as data from "../../shared/data/data/contacts/contacts";
import { NewContactsComponent } from "./modal/new-contacts/new-contacts.component";
import { ViewCategoryComponent } from "./modal/view-category/view-category.component";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})

export class ContactsComponent {
  
  public personal = data.personal;
  public Organization = data.Organization;
  public selectedId: number;
  public activeStatus: boolean;
  public isOpen : boolean = false;
  public viewList = data.viewList;

  constructor(private modalService: NgbModal) {}

  newContact() {
    const modalRef = this.modalService.open(NewContactsComponent, {
      size: "lg",
    });
  }

  viewCaregory() {
    const modalRef = this.modalService.open(ViewCategoryComponent, {
      size: "lg",
    });
  }

  changeDataPersnol(id: number) {
    const getId = this.personal.filter((x) => x.title_id == id);
    this.selectedId = getId[0].title_id;
  }

  changeDataOrganization(list: number ) {
    const getId = this.Organization.filter(x => x.title_id == list);
    this.selectedId = getId[0].title_id;
  }

  Outside(){
    this.isOpen = false;  
   }
}
