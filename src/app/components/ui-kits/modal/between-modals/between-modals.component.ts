import { Component, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-between-modals',
  templateUrl: './between-modals.component.html',
  styleUrls: ['./between-modals.component.scss']
})

export class BetweenModalsComponent {

  constructor(private modalService: NgbModal) { }

  public modalRef1: NgbModalRef;

  openFirstModal(firstModalContent: TemplateRef<NgbModal>){
    this.modalRef1 = this.modalService.open(firstModalContent, { centered: true });
  }

  openSecondModal(secondModalContent: TemplateRef<NgbModal>){
    const modalRef = this.modalService.open(secondModalContent, { centered: true });
    this.modalRef1.dismiss();
  }

}
