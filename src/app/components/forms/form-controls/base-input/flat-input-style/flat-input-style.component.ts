import { Component } from "@angular/core";

@Component({
  selector: "app-flat-input-style",
  templateUrl: "./flat-input-style.component.html",
  styleUrls: ["./flat-input-style.component.scss"],
})
export class FlatInputStyleComponent {
  public selectedItem: string[] = [];

  public multiple = [
    { id: 1, name: "Landscape" },
    { id: 2, name: "Portrait" },
    { id: 3, name: "Oil Painting" },
    { id: 4, name: "Abstract art" },
    { id: 4, name: "Acrylic" },
  ];

}
