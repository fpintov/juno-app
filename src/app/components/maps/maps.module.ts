import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '../../shared/shared.module';
import { MapsRoutingModule } from './maps-routing.module';

import { GoogleMapComponent } from './google-map/google-map.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

@NgModule({
  declarations: [
    GoogleMapComponent,
    LeafletMapComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    GoogleMapsModule,
    SharedModule
  ]
})
export class MapsModule { }
