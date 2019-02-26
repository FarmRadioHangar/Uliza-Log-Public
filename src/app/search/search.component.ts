import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Project} from '../models';
import {ProjectService} from '../project.service';
import {map, startWith} from 'rxjs/operators';
import {CountryService} from '../country.service';

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
export class SearchComponent {
  results = new Observable<Project[]>((observer) => {
     this.stateCtrl.valueChanges
        .subscribe(
          value => this.projectService.search(value)
        .subscribe(result => observer.next(result['results']))
     );
   });

  stateCtrl = new FormControl();

  states: Project[] = [];

  redirect = function (url) {
    window.location = url;
  }


  private countries: { [id: string] : string;} = {};

  getCountries(): void {
   this.countryService.getCountries()
       .subscribe(countries => {
        for (let i = 0; i < countries.length ; i++) {
         this.countries[countries[i]['id']] = countries[i]['country_code'];
        }
       });
  }


  getProjectCountryCode(project: any): string {
   if (project in this.countries) {
    return this.countries[project];
   }
   else
    return '';
  }

  constructor(private projectService: ProjectService,private countryService: CountryService) {
   this.getCountries();
  }

  ngOnInit() {
  }
}