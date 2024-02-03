import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/ecommerce' 

@Component({
  selector: 'app-top-seller',
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss']
})

export class TopSellerComponent {

   public isShow : boolean = false;
   public TopSeller  = data.TopSeller;

   clickOutside(): void {
    this.isShow = false;
  }
   
}
