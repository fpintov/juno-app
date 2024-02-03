import { Component } from "@angular/core";
import { Image } from "@ks89/angular-modal-gallery";

@Component({
  selector: "app-product-slider",
  templateUrl: "./product-slider.component.html",
  styleUrls: ["./product-slider.component.scss"],
})
export class ProductSliderComponent {

  public seconds: number;
  public interval: any;

  constructor() {
    this.interval = setInterval(function (this: any) {
      let currentDate = new Date();
      currentDate.setHours(0); 
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      let nowDate = new Date();
      let daysToAdd = 7;
      currentDate.setDate(currentDate.getDate() + daysToAdd);
      let distance = currentDate.getTime() - nowDate.getTime();
      this.document.querySelectorAll('#days').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      });

      this.document.querySelectorAll('#hours').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      });

      this.document.querySelectorAll('#minutes').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      });

      this.document.querySelectorAll('#seconds').forEach((element: { innerHTML: number; }) => {
        element.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
      });
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  
  public imagesRect: Image[] = [
    new Image(
      0,
      { img: "assets/images/dashboard-3/slider/4.png" },
      { img: "assets/images/dashboard-3/slider/1.png" }
    ),
    new Image(
      1,
      { img: "assets/images/dashboard-3/slider/5.png" },
      { img: "assets/images/dashboard-3/slider/2.png" }
    ),
    new Image(
      2,
      { img: "assets/images/dashboard-3/slider/6.png" },
      { img: "assets/images/dashboard-3/slider/3.png" }
    ),
  ];
}
