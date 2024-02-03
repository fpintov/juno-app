import { Component } from '@angular/core';
import { wordTreeChart } from '../../../../shared/data/chart/charts/google-chart';

@Component({
  selector: 'app-word-tree',
  templateUrl: './word-tree.component.html',
  styleUrls: ['./word-tree.component.scss']
})

export class WordTreeComponent {
  public wordTreeChart = wordTreeChart;
}
