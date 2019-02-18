import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: Observable<State[]>;
  stateCtrl = new FormControl();
  states: State[] = [];

  constructor() {
    this.results = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    // return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    return []
  }

  ngOnInit() {
  }
}
