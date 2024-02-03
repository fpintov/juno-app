import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '../../shared/shared.module';
import { GalleryRoutingModule } from './gallery-routing.module';

import { GalleryGridWithDescComponent } from './gallery-grid-with-desc/gallery-grid-with-desc.component';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { ImageHoverEffectsComponent } from './image-hover-effects/image-hover-effects.component';
import { MasonryGalleryWithDescComponent } from './masonry-gallery-with-desc/masonry-gallery-with-desc.component';
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';


@NgModule({
  declarations: [
    GalleryGridComponent,
    GalleryGridWithDescComponent,
    MasonryGalleryComponent,
    MasonryGalleryWithDescComponent,
    ImageHoverEffectsComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgxMasonryModule,
    SharedModule,
  ]
})
export class GallaryModule { }
