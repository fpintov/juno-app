import { Component } from '@angular/core';
import { allIcon } from '../../../shared/data/data/icons/font-awasome';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-themify-icon',
  templateUrl: './themify-icon.component.html',
  styleUrls: ['./themify-icon.component.scss']
})

export class ThemifyIconComponent {

  public themify = allIcon.themify;
  public detail: boolean = false;
  public icon: string;
  public val: string;
  
  constructor(public toastrService:ToastrService) { }

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="' + icon + '"></i>';
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }

}
