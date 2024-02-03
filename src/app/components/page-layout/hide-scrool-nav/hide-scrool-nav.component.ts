import { Component, HostListener } from '@angular/core';
import { HidescrollnavService } from '../../../shared/services/hidescrollnav.service';

@Component({
  selector: 'app-hide-scrool-nav',
  templateUrl: './hide-scrool-nav.component.html',
  styleUrls: ['./hide-scrool-nav.component.scss']
})

export class HideScroolNavComponent {

  constructor(public hideScroolNavService: HidescrollnavService){}

  @HostListener("window:scroll", [])

  onWindowScroll() {
    let number = window.pageYOffset || 0;
  	if (number > 252) { 
  	  this.hideScroolNavService.headerFixed = true;
  	} else {
  	  this.hideScroolNavService.headerFixed = false;
  	}        
  }
}
