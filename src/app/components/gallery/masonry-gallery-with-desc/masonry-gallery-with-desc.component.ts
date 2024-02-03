import { Component, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { masonryGalleryGridWithDesc } from '../../../shared/data/data/gallery/gallery';

@Component({
  selector: 'app-masonry-gallery-with-desc',
  templateUrl: './masonry-gallery-with-desc.component.html',
  styleUrls: ['./masonry-gallery-with-desc.component.scss']
})

export class MasonryGalleryWithDescComponent {

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  public limit = 20;

  public masonryGalleryGridWithDesc = masonryGalleryGridWithDesc;

}
