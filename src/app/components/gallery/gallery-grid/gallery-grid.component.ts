import { Component } from '@angular/core';
import { galleryGridData } from '../../../shared/data/data/gallery/gallery';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})

export class GalleryGridComponent {

 public galleryGridData = galleryGridData;

}
