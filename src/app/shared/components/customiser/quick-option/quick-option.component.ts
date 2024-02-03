import { Component, HostListener } from "@angular/core";
import { LayoutService } from "../../../../shared/services/layout.service";

@Component({
  selector: "app-quick-option",
  templateUrl: "./quick-option.component.html",
  styleUrls: ["./quick-option.component.scss"],
})
export class QuickOptionComponent {

  public layoutType: string = "ltr";
  public sidebarType: string = "compact-wrapper";
  public icon: string = "stroke-svg";
  public screenwidth = window.innerWidth;

  constructor(public layout: LayoutService) {}

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.screenwidth = window.innerWidth;
  }

  customizeLayoutType(value: string) {
    this.layoutType = value;
    this.layout.config.settings.layout_type = value;
    if (value == "rtl") {
      document.getElementsByTagName("html")[0].setAttribute("dir", value);
      document.body.className = "rtl";
    } else if (value == "box-layout") {
      document.getElementsByTagName("html")[0].setAttribute("dir", value);
      document.body.className = "box-layout";
    } else {
      document.getElementsByTagName("html")[0].removeAttribute("dir");
      document.body.className = "";
    }
    this.layout.customizer = "";
  }

  customizeSidebarType(value: string) {
    if (this.screenwidth < 1200) {
      if (value == "horizontal-wrapper") {
        this.layout.config.settings.sidebar_type = "compact-wrapper";
      }
    } else {
      this.sidebarType = value;
      this.layout.config.settings.sidebar_type = value;
      this.layout.customizer = "";
    }
  }

  svgIcon(val: string) {
    this.icon = val;
    this.layout.config.settings.icon = val;
    if (val == "stroke-svg") {
      document
        .getElementsByTagName("sidebar-wrapper")[0]
        ?.setAttribute("icon", val);
    } else {
      document
        .getElementsByTagName("sidebar-wrapper")[0]
        ?.setAttribute("icon", val);
    }
  }
}
