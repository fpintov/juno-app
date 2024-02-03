import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/dashboard/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {

  public websiteDesign = data.websiteDesign
  public socialPostDesign = data.socialPostDesign;
  public podcastWebDesign = data.podcastWebDesign;
  public cryptoDashboard = data.cryptoDashboard;

}
