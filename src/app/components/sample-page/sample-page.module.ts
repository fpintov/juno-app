import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SamplePageRoutingModule } from './sample-page-routing.module';

import { SamplePageComponent } from './sample-page.component';

@NgModule({
  declarations: [
    SamplePageComponent
  ],
  imports: [
    CommonModule,
    SamplePageRoutingModule
  ]
})
export class SamplePageModule { }
