import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tooltip-form',
  templateUrl: './tooltip-form.component.html',
  styleUrls: ['./tooltip-form.component.scss']
})

export class TooltipFormComponent {
  
  public validate = false;
  public myForm = new FormGroup({});

  public form(myForm : FormGroup) {
     if(!this.myForm.valid){
       this.validate = false;
     } else {
      this.validate = true;
     }
  }
}
