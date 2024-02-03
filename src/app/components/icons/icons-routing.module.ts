import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { WhetherIconComponent } from './whether-icon/whether-icon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag-icon',
        component: FlagIconsComponent,
        data: {
          title: 'Flag Icons',
          breadcrumb: 'Flag Icons',
        }
      },
      {
        path: 'fontawesome',
        component: FontAwesomeComponent,
        data: {
          title: 'Font Awesome Icon',
          breadcrumb: 'Font Awesome Icon',
        }
      },
       {
        path: 'ico-icons',
        component: IcoIconComponent,
        data: {
          title: 'ICO Icon',
          breadcrumb: 'ICO Icon',
        }
      },
      {
        path: 'themify-icons',
        component: ThemifyIconComponent,
        data: {
          title: 'Themify icon',
          breadcrumb: 'Themify icon',
        }
      },
      {
        path: 'feather-icons',
        component: FeatherIconComponent,
        data: {
          title: 'Feather Icons',
          breadcrumb: 'Feather Icons',
        }
      },
      {
        path: 'weather-icons',
        component:  WhetherIconComponent,
        data: {
          title: 'Whether Icon',
          breadcrumb: 'Whether Icon',
        }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
