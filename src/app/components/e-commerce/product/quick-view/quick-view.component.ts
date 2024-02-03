import { Component, TemplateRef, ViewChild } from '@angular/core';
import * as data from '../../../../shared/model/product.model'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})

export class QuickViewComponent {

  public productDetail: data.Products;
  public counter: number = 1;
  public closeResult: string;
  public modalOpen: boolean = false;

  @ViewChild("productModal", { static: false }) productModal: TemplateRef<data.Products>;

  constructor(private modalService: NgbModal) { }

  async openModal(product: data.Products) {
    this.productDetail = product;
    this.modalOpen = true;
    this.modalService.open(this.productModal, {
      ariaLabelledBy: 'Confirmation-Modal',
      centered: true,
      windowClass: 'modal-lg modal-dialog-centered'
    }).result.then((result) => {
      `Result ${result}`
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }
  
}
