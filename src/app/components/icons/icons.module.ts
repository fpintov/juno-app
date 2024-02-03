import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsRoutingModule } from './icons-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { WhetherIconComponent } from './whether-icon/whether-icon.component';


@NgModule({
  declarations: [
    FlagIconsComponent,
    FontAwesomeComponent,
    IcoIconComponent,
    ThemifyIconComponent,
    FeatherIconComponent,
    WhetherIconComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModule
  ]
})
export class IconsModule { }
