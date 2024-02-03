import { Component, Input } from '@angular/core';
import { addProduct } from '../../../../shared/data/data/ecommerce/add-product';

@Component({
  selector: 'app-add-product-tab',
  templateUrl: './add-product-tab.component.html',
  styleUrls: ['./add-product-tab.component.scss']
})

export class AddProductTabComponent {

  @Input()  data : addProduct[];
  @Input() activeSteps!: number;

}
