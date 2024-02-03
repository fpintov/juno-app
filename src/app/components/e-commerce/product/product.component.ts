import { Component } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  public listView: boolean = false;
  public openSidebar: boolean = false;
  public isShow: Boolean = false;

  constructor( public productServices : ProductService ){ }

  gridOpens() {
    this.listView = false;
    this.productServices.gridOpen()
  }

  listOpens() {
    this.listView = true;
    this.productServices.listOpen()
  }

  grid2s() {
    this.listView = false;
    this.productServices.grid2()
  }

  grid3s() {
    this.listView = false;
    this.productServices.grid3()
  }

  grid6s() {
    this.listView = false;
    this.productServices.grid6()
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }

}
