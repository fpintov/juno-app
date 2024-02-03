import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raise-input-style',
  templateUrl: './raise-input-style.component.html',
  styleUrls: ['./raise-input-style.component.scss']
})

export class RaiseInputStyleComponent {

  constructor(private router:Router) {}

  submit() {
    this.router.navigate(['/form-controls/base-inputs'])
  }


}
