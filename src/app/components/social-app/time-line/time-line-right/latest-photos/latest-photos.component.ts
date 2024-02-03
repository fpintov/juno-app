import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";

@Component({
  selector: 'app-latest-photos',
  templateUrl: './latest-photos.component.html',
  styleUrls: ['./latest-photos.component.scss']
})

export class LatestPhotosComponent {

  public isCollapsed = false;
  public latestPhotos = data.latestPhotos;

}
