import { Component } from "@angular/core";
import * as data from "../../shared/data/data/file-maganer/file-maganer";

@Component({
  selector: "app-file-manager",
  templateUrl: "./file-manager.component.html",
  styleUrls: ["./file-manager.component.scss"],
})

export class FileManagerComponent {

  public sidebar = data.sidebarData;
  public isShow: boolean = false;

  Outside(){
   this.isShow = false;  
  }
  
}
