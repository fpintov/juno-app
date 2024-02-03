import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/social-app/social-app';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})

export class PhotoComponent {

   public photosData = data.photosData;
   public items : GalleryItem[]; 

   constructor(public gallery: Gallery, public lightbox: Lightbox) {}
   
   ngOnInit() {

    this.items = this.photosData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    lightboxRef.load(this.items);
  }

}
