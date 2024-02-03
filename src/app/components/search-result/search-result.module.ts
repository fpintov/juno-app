import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SearchResultRoutingModule } from './search-result-routing.module';

import { AllComponent } from './all/all.component';
import { ImageComponent } from './image/image.component';
import { SearchResultComponent } from './search-result.component';
import { VideoComponent } from './video/video.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AllComponent,
    ImageComponent,
    VideoComponent,
    SearchResultComponent,

  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SharedModule,
    NgbRatingModule
  ]
})
export class SearchResultModule { }
