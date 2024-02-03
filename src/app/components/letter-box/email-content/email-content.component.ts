import { Component, Input, SimpleChanges } from "@angular/core";
import * as data from "../../../shared/data/data/ecommerce/email";
import { email, tabData } from "../../../shared/data/data/ecommerce/email";

@Component({
  selector: "app-email-content",
  templateUrl: "./email-content.component.html",
  styleUrls: ["./email-content.component.scss"],
})

export class EmailContentComponent {
  
  public getEmailData: email;
  public emailFilter = data.emailFilter;
  public isShow: boolean = false;
  public tabData = tabData;
  public openTab: string = "promotion";
  public isOpne: boolean = false;
  public pageSize = 8;
  public currentPage = 1;
  @Input() selectedId: number;

  ngOnInit() {
    this.emailFilter.map((data) => {
      if (data.status) {
        this.getEmailData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes["selectedId"].currentValue;
    this.emailFilter.map((data) => {
      if (data.id === id) {
        this.getEmailData = data;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }

  bookMark(id: number) {
    this.emailFilter.forEach((list) => {
      list.data.forEach((items) => {
        if (items.id === id) {
          items.active = !items.active;
          items.isOpens = !items.isOpens
        }
      });
    });
  }

  tabActive(value: string) {
    this.openTab = value;
  }

  deleteEmail(index: number, name: string) {
    this.emailFilter.forEach((data) => {
      if (data.id == this.getEmailData.id) {
        data.data.forEach((element) => {
          if (this.emailFilter)
            if (element.name == name) {
              data.data.splice(index, 1);
            }
        });
      }
    });
  }

  isFalse(value: boolean) {
    this.isOpne = value;
  }
}
