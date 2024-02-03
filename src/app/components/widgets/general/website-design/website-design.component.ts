import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';

@Component({
  selector: 'app-website-design',
  templateUrl: './website-design.component.html',
  styleUrls: ['./website-design.component.scss']
})

export class WebsiteDesignComponent {

  public websiteDesign = data.websiteDesign
  public isShow : boolean = false;

  clickOutside(): void {
    this.isShow = false;
  }
}
