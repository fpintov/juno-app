import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FullscreenCommonModalComponent } from "./fullscreen-common-modal/fullscreen-common-modal.component";
import { FullscreenModalFlComponent } from "./fullscreen-modal-fl/fullscreen-modal-fl.component";

@Component({
  selector: "app-fullscreen-modal",
  templateUrl: "./fullscreen-modal.component.html",
  styleUrls: ["./fullscreen-modal.component.scss"],
})
export class FullscreenModalComponent {
  public title = "";
  constructor(private modalService: NgbModal) {}

  fullscreenModal() {
    this.modalService.open(FullscreenModalFlComponent, { fullscreen: true });
  }

  fullscreenSMModal() {
    this.title = "Full Screen Below sm";
    const modal = this.modalService.open(FullscreenCommonModalComponent, {
      size: "md",
    });
    modal.componentInstance.title = this.title;
  }

  fullscreenMDModal() {
    this.title = "Full Screen Below md";
    const modal = this.modalService.open(FullscreenCommonModalComponent, {
      size: "md",
    });
    modal.componentInstance.title = this.title;
  }

  fullscreenLGModal() {
    this.title = "Full Screen Below lg";
    const modal = this.modalService.open(FullscreenCommonModalComponent, {
      size: "lg",
    });
    modal.componentInstance.title = this.title;
  }

  fullscreenXLModal() {
    this.title = "Full Screen Below xl";
    const modal = this.modalService.open(FullscreenCommonModalComponent, {
      size: "xl",
    });
    modal.componentInstance.title = this.title;
  }

  fullscreenXXLModal() {
    this.title = "Full Screen Below xxl";
    const modal = this.modalService.open(FullscreenCommonModalComponent, {
      size: "xxl",
    });
    modal.componentInstance.title = this.title;
  }
}
