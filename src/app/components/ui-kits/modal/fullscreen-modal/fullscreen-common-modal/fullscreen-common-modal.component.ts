import { Component, Input } from '@angular/core';
import * as data  from '../../../../../shared/data/data/ui-kits/ui-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fullscreen-common-modal',
  templateUrl: './fullscreen-common-modal.component.html',
  styleUrls: ['./fullscreen-common-modal.component.scss']
})

export class FullscreenCommonModalComponent {

  @Input() title : string;
  public commonFullScreenData = data.commonFullScreenSizeData;
  constructor(private modal : NgbModal){}

  close(){
    this.modal.dismissAll();
  }

}
