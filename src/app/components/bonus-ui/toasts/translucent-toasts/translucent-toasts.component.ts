import { Component } from "@angular/core";
import { translucentToastsData } from "../.././../../shared/data/data/toastr/toastr";

@Component({
  selector: "app-translucent-toasts",
  templateUrl: "./translucent-toasts.component.html",
  styleUrls: ["./translucent-toasts.component.scss"],
})
export class TranslucentToastsComponent {
  public translucentToastsData = translucentToastsData;
  public isShow: boolean = true;

  close(id: number) {
    const close = translucentToastsData.filter((data) => {
      return data.id === id;
    });
    close[0].show = false;
  }
}
