import { Component } from '@angular/core';
import { allIcon } from '../../../shared/data/data/icons/font-awasome';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ico-icon',
  templateUrl: './ico-icon.component.html',
  styleUrls: ['./ico-icon.component.scss']
})

export class IcoIconComponent {

  public icoIcons = allIcon.ico;
  public detail: boolean = false;
  public icon: string;
  public val: string;

  constructor(public toastrService: ToastrService) { }

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="icofont icofont-' + icon + '"></i>';
  }

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="icofont icofont-' + val + '"></i>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });

  }

}
