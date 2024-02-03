import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLayoutRoutingModule } from './page-layout-routing.module';

import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { HideScroolNavComponent } from './hide-scrool-nav/hide-scrool-nav.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';


@NgModule({
  declarations: [
    HideScroolNavComponent,
    FooterDarkComponent,
    FooterLightComponent,
    FooterFixedComponent,
    FooterLayoutComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule
  ]
})
export class PageLayoutModule { }
