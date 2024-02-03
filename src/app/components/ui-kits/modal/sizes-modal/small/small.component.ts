import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})

export class SmallComponent {

  public smallModalData = Data.smallModalData;
  
  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll()
  }

}
