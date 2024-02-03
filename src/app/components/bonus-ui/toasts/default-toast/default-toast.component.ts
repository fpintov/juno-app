import { Component } from '@angular/core';

@Component({
  selector: 'app-default-toast',
  templateUrl: './default-toast.component.html',
  styleUrls: ['./default-toast.component.scss']
})

export class DefaultToastComponent {

  public isShow : boolean = true;

  close(){
    this.isShow = false;
  }

}
