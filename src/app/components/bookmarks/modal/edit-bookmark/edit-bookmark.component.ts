import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../../shared/data/data/bookmarks/bookmark'

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})

export class EditBookmarkComponent {

  public closeResult: string;
  public modalOpen: boolean = false;
  public bookmarkDetails : data.bookmarkModel[];

  @ViewChild("editBookmarkModal", { static: false }) editBookmarkModal: TemplateRef<data.bookMark>;

  constructor(public activeModal: NgbActiveModal , private modalService: NgbModal) {}

  async openModal(data:data.bookmarkModel[]) {    
    this.bookmarkDetails = data;
    this.modalOpen = true;
    this.modalService.open(this.editBookmarkModal, {
      ariaLabelledBy: 'EditBookmark-Modal',
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

}
