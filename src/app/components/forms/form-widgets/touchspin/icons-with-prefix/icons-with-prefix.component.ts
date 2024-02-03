import { Component } from '@angular/core';

@Component({
  selector: 'app-icons-with-prefix',
  templateUrl: './icons-with-prefix.component.html',
  styleUrls: ['./icons-with-prefix.component.scss']
})

export class IconsWithPrefixComponent {

  public value : number[] = [0,0];
  
  decrement(i : number){
    if(i === 0 || i === 1){
      if(this.value[i] > 1){
        this.value[i] -= 1;
      }
    }
  }
  Increment(i : number){
    {
      if(i === 0 || i === 1){
        this.value[i] += 1;
      }
    }
  }

}
