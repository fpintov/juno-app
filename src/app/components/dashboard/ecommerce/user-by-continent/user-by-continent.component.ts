import { Component } from '@angular/core';
import * as L from 'leaflet';
  import * as data from '../../../../shared/data/data/dashboard/ecommerce';
@Component({
  selector: 'app-user-by-continent',
  templateUrl: './user-by-continent.component.html',
  styleUrls: ['./user-by-continent.component.scss']
})

export class UserByContinentComponent {

  public isShow : boolean = false; 
  public contriesSale  = data.contriesSale;
  public itemsProgress  = data.itemsProgress;
  public options1 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909),
  };

  clickOutside(): void {
    this.isShow = false;
  }
  
}
