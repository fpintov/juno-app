import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-backdrop',
  templateUrl: './static-backdrop.component.html',
  styleUrls: ['./static-backdrop.component.scss']
})

export class StaticBackdropComponent {

  constructor(private modalService: NgbModal) { }

  openStaticModal(staticContent: TemplateRef<NgbModal>){
    const modalRef = this.modalService.open(staticContent);
  }

  close(){
    this.modalService.dismissAll();
  }
}
