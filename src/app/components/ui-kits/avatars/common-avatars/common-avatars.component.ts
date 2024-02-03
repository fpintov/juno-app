import { Component, Input } from '@angular/core';
import { avatar } from '../../../../shared/data/data/ui-kits/avatars';

@Component({
  selector: 'app-common-avatars',
  templateUrl: './common-avatars.component.html',
  styleUrls: ['./common-avatars.component.scss']
})

export class CommonAvatarsComponent {

  @Input() data : avatar;
}


