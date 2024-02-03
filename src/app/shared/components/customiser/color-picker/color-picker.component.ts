import { Component } from "@angular/core";
import { LayoutService } from "../../../../shared/services/layout.service";

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"],
})

export class ColorPickerComponent {

  public primary_color: string = localStorage.getItem("primary_color") || "#7A70BA";
  public secondary_color: string = localStorage.getItem("secondary_color") || "#48A3D7";
  public maxLayout: string = "dark-sidebar";

  constructor(public layout: LayoutService) {
    document.documentElement.style.setProperty("--theme-deafult", localStorage.getItem("primary_color"));
    document.documentElement.style.setProperty("--theme-secondary", localStorage.getItem("secondary_color"));
    var primary = localStorage.getItem("primary_color") || this.layout.config.color.primary_color;
    var secondary = localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") || this.layout.config.color.primary_color;
    localStorage.getItem("secondary_color") || this.layout.config.color.secondary_color;
  }

  applyColor() {
    this.layout.config.color.secondary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    localStorage.setItem("primary_color", this.primary_color);
    localStorage.setItem("secondary_color", this.secondary_color);
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-deafult", "#7A70BA");
    document.documentElement.style.setProperty("--theme-secondary", "#48A3D7");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value = "#7A70BA";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value = "#48A3D7";
    localStorage.setItem("primary_color", "#7A70BA");
    localStorage.setItem("secondary_color", "#48A3D7");
    window.location.reload();
  }

  customizeMixLayout(value: string) {
    this.maxLayout = value;
    this.layout.config.settings.layout_version = value;
    document.body.classList.remove("dark-sidebar","dark-only");
    if(value == 'dark-sidebar') {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }
}
