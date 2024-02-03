import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryGridComponent } from "./gallery-grid/gallery-grid.component";
import { GalleryGridWithDescComponent } from "./gallery-grid-with-desc/gallery-grid-with-desc.component";
import { MasonryGalleryComponent } from "./masonry-gallery/masonry-gallery.component";
import { MasonryGalleryWithDescComponent } from "./masonry-gallery-with-desc/masonry-gallery-with-desc.component";
import { ImageHoverEffectsComponent } from "./image-hover-effects/image-hover-effects.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "gallary-grid",
        component: GalleryGridComponent,
        data: {
          title: "Gallery",
          breadcrumb: "Gallery",
        },
      },
      {
        path: 'gallery-grid-desc',
        component: GalleryGridWithDescComponent,
        data: {
          title: 'Gallery Grid With Description',
          breadcrumb: 'Gallery Grid With Description',
        }
      },
      {
        path: 'masonry-gallery',
        component: MasonryGalleryComponent,
        data: {
          title: 'Masonry Gallery',
          breadcrumb: 'Masonry Gallery',
        }
      },
      {
        path: 'masonry-with-desc',
        component: MasonryGalleryWithDescComponent,
        data: {
          title: 'Masonry Gallery With Description',
          breadcrumb: 'Masonry Gallery With Description',
        }
      },
      {
        path: 'hover-effects',
        component: ImageHoverEffectsComponent,
        data: {
          title: 'Image Hover Effects',
          breadcrumb: 'Image Hover Effects',
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
