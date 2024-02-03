import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideScroolNavComponent } from './hide-scrool-nav/hide-scrool-nav.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hide-nav-scroll',
        component: HideScroolNavComponent,
        data: {
          title: 'Hide Menu On Scroll',
          breadcrumb: 'Hide Menu On Scroll',
        }
      },
      {
        path: 'footer-dark',
        component: FooterDarkComponent,
        data: {
          title: 'Footer Dark',
          breadcrumb: 'Footer Dark',
        }
      },
      {
        path: 'footer-light',
        component: FooterLightComponent,
        data: {
          title: 'Footer Light',
          breadcrumb: 'Footer Light',
        }
      },
      {
        path: 'footer-fixed',
        component: FooterFixedComponent,
        data: {
          title: 'Footer Fixed',
          breadcrumb: 'Footer Fixed',
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
