import { Component } from '@angular/core';
import { galleryGridWithDesc } from '../../../shared/data/data/gallery/gallery';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery-grid-with-desc',
  templateUrl: './gallery-grid-with-desc.component.html',
  styleUrls: ['./gallery-grid-with-desc.component.scss']
})

export class GalleryGridWithDescComponent {
  
  private items: GalleryItem[];
  
  public galleryGridWithDesc = galleryGridWithDesc;
  
  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit() {
    this.items = this.galleryGridWithDesc.map(item => new ImageItem({ src: item.srcUrl}));
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxRef.load(this.items);
  }


}
