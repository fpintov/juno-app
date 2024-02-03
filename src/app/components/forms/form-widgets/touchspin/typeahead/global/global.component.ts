import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as data from '../../../../../../shared/data/data/forms/form-widgets';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})

export class GlobalComponent {

  public searchData = data.state;

  constructor(config: NgbTypeaheadConfig) {
		// customize default values of typeaheads used by this component tree
		config.showHint = true;
	}

	search = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 2 ? [] : this.searchData.filter((v) => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10),
			),
		);

}
