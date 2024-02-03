import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FullScreenComponent } from "./full-screen/full-screen.component";
import { ExtraLargeComponent } from "./extra-large/extra-large.component";
import { LargeComponent } from "./large/large.component";
import { SmallComponent } from "./small/small.component";

@Component({
  selector: "app-sizes-modal",
  templateUrl: "./sizes-modal.component.html",
  styleUrls: ["./sizes-modal.component.scss"],
})

export class SizesModalComponent {

  constructor(private modal : NgbModal){}

  fullScreenModal(){
    this.modal.open(FullScreenComponent, { fullscreen: true })
  }

  extraLargeModal(){
    this.modal.open(ExtraLargeComponent, { size: 'xl' })
  }

  largeModal(){
    this.modal.open(LargeComponent, { size : 'lg' })
  }

  smallModal(){
    this.modal.open(SmallComponent, { size : 'sm' })
  }
}
