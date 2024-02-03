import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/gallery/hover'
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-image-hover-effects',
  templateUrl: './image-hover-effects.component.html',
  styleUrls: ['./image-hover-effects.component.scss']
})

export class ImageHoverEffectsComponent {

  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
  private items: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.items = this.imgData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }

}
