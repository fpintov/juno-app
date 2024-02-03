import { Component } from '@angular/core';
import * as data from '../../../../../../shared/data/data/forms/form-widgets';
import { OperatorFunction, Observable, debounceTime, map } from 'rxjs';


@Component({
  selector: 'app-select-on-exact',
  templateUrl: './select-on-exact.component.html',
  styleUrls: ['./select-on-exact.component.scss']
})

export class SelectOnExactComponent {

  public searchData = data.statesData;

  search: OperatorFunction<string, readonly { name : string }[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			map((term) =>
				term === '' ? [] : this.searchData.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

    formatter = (x: { name: string }) => x.name;

}
