import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RatingComponent } from './rating/rating.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { ToastsComponent } from './toasts/toasts.component';
import { CreativeCardsComponent } from './creative-cards/creative-cards.component';
import { TimeLineComponent } from './time-line/time-line.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'toasts',
        component: ToastsComponent,
        data: {
          title: 'Toasts',
          breadcrumb: 'Toasts',
        }
      },
      {
        path: 'rating',
        component: RatingComponent,
        data: {
          title: 'Rating',
          breadcrumb: 'Rating',
        }
      },
      {
        path: 'dropzone',
        component: DropzoneComponent,
        data: {
          title: 'Dropzone',
          breadcrumb: 'Dropzone',
        }
      },
      {
        path: 'sweetalert2',
        component: SweetAlertComponent,
        data: {
          title: 'Sweet Alert',
          breadcrumb: 'Sweet Alert',
        }
      },
      {
        path: 'owl-carousel',
        component: OwlCarouselComponent,
        data: {
          title: 'Owl Carousel',
          breadcrumb: 'Owl Carousel',
        }
      },
      {
        path: 'ribbons',
        component: RibbonsComponent,
        data: {
          title: 'Ribbons',
          breadcrumb: 'Ribbons',
        }
      },
      {
        path: 'pagination',
        component: PaginationsComponent,
        data: {
          title: 'Paginations',
          breadcrumb: 'Paginations',
        }
      },
      {
        path: 'breadcrumb-ui',
        component: BreadcrumbComponent,
        data: {
          title: 'Breadcrumb',
          breadcrumb: 'Breadcrumb',
        }
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent,
        data: {
          title: 'Range Slider',
          breadcrumb: 'Range Slider',
        }
      },
      {
        path: 'image-cropper',
        component: ImageCropperComponent,
        data: {
          title: 'Image Cropper',
          breadcrumb: 'Image Cropper',
        }
      },
      {
        path: 'basic-card',
        component: BasicCardComponent,
        data: {
          title: 'Basic Card',
          breadcrumb: 'Basic Card',
        }
      },
      {
        path: 'creative-card',
        component: CreativeCardsComponent,
        data: {
          title: 'Creative Card',
          breadcrumb: 'Creative Card',
        }
      },
      {
        path: 'timeline',
        component: TimeLineComponent,
        data: {
          title: 'Time Line',
          breadcrumb: 'Time Line',
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusUiRoutingModule { }
