import { Component } from '@angular/core';
import { stackingToastData } from '../../../../shared/data/data/toastr/toastr';

@Component({
  selector: 'app-stacking-toasts',
  templateUrl: './stacking-toasts.component.html',
  styleUrls: ['./stacking-toasts.component.scss']
})

export class StackingToastsComponent {

  public stackingToastData = stackingToastData;
  public isShow : boolean = true;

  close(id : number){
    const close = stackingToastData.filter((data) => {
      return data.id === id;
    })    
    close[0].show = false;      
  }

}
