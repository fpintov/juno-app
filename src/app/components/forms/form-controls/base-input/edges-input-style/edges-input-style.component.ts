import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edges-input-style',
  templateUrl: './edges-input-style.component.html',
  styleUrls: ['./edges-input-style.component.scss']
})

export class EdgesInputStyleComponent {

  constructor(private router : Router) {}

  submit() {
    this.router.navigate(['/form-controls/base-inputs'])
  }

}
