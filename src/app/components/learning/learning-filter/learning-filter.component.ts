import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-filter',
  templateUrl: './learning-filter.component.html',
  styleUrls: ['./learning-filter.component.scss']
})

export class LearningFilterComponent {

  public isOpen : boolean = false;

  Outside(){
    this.isOpen = false;  
   }
}
