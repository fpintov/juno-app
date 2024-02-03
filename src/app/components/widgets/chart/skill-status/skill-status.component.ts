import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
@Component({
  selector: 'app-skill-status',
  templateUrl: './skill-status.component.html',
  styleUrls: ['./skill-status.component.scss']
})

export class SkillStatusComponent {

  public cricleChart = data.cricleChart;

}
