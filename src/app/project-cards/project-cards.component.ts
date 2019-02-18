import { Component, OnInit } from '@angular/core';
import {Project,Country} from '../models';
import {ProjectService} from '../project.service';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent implements OnInit {
  projects: Project[];
  page_number=1;
  disable_requests: Boolean = false;

  private countries: { [id: string] : string;} = {};

  constructor(private projectService: ProjectService, private countryService: CountryService) { }

  getCountries(): void {
   this.countryService.getCountries()
       .subscribe(countries => {
        for (let i = 0; i < countries.length ; i++) {
         this.countries[countries[i]['id']] = countries[i]['country_code'];
        }
       });
  }

  isSameYear(date1,date2): boolean{
   date1 = new Date(date1);
   date2 = new Date(date2);

   if (date1.getFullYear() == date2.getFullYear())
    return true;
   else
    return false;

  }

  load_more(): void {
   this.page_number = this.page_number+1;
   this.disable_requests = true;

   this.projectService.getProjects(String(this.page_number))
    .subscribe(projects => {
     this.projects = this.projects.concat(projects['results']);
     this.disable_requests = false;

   });
  }

  getProjects(): void {
   this.projectService.getProjects()
    .subscribe(projects => {
     this.projects = projects['results']
   });
  }

  getProjectCountryCode(project: any): string {
   if (project['country'] in this.countries)
    return this.countries[project['country']];
   else
    return '';
  }

  ngOnInit() {
   this.getCountries();
   this.getProjects();
  }

}
