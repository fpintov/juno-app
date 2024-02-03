import { Component, EventEmitter, Output } from "@angular/core";
import { NgxDropzoneChangeEvent } from "ngx-dropzone";
import Swal from "sweetalert2";

@Component({
  selector: "app-product-gallery",
  templateUrl: "./product-gallery.component.html",
  styleUrls: ["./product-gallery.component.scss"],
})

export class ProductGalleryComponent {

  @Output() activeSteps = new EventEmitter<number>();
  public image: File[] = [];
  public gallery: File[] = [];
  public activeStep: number = 2;

  onImage(event: NgxDropzoneChangeEvent) {
    this.image.push(...event.addedFiles);
  }

  onRemoveImage(event: File) {
    this.image.splice(this.image.indexOf(event), 1);
  }

  ongallery(event: NgxDropzoneChangeEvent) {
    this.gallery.push(...event.addedFiles);
  }

  onRemovegallery(event: File) {
    this.gallery.splice(this.gallery.indexOf(event), 1);
  }

  next() {
    if (this.image.length === 0) {
      Swal.fire({
        title: "Please upload product image",
        confirmButtonColor: "var(--theme-deafult)",
      });
    } else if (this.gallery.length === 0) {
      Swal.fire({
        title: "Please upload product gallery",
        confirmButtonColor: "var(--theme-deafult)",
      });
    } else {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
