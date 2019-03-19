import { Component, OnInit } from '@angular/core';
import {Project,Country} from '../models';
import {ProjectService} from '../project.service';
import {CountryService} from '../country.service';
import {Meta} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {Env} from '../env';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent implements OnInit {
  projects: Project[];
  page_number=1;
  next_page = null;
  image_url = Env['image_url'];
  disable_requests: Boolean = false;

  private countries: { [id: string] : string;} = {};

  constructor(private projectService: ProjectService,
              private countryService: CountryService,
              private route: ActivatedRoute,
              private meta: Meta) {
   // <meta name="viewport" content="width=device-width, initial-scale=1">
   this.meta.addTag({name:"viewport", content:"width=device-width, initial-scale=1"});

  }

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
   const stationId = +this.route.snapshot.paramMap.get('stationId');
   this.page_number = this.page_number+1;
   this.disable_requests = true;

   if (stationId) {
     this.projectService.getStationProjects(String(stationId),String(this.page_number))
      .subscribe(projects => {
       this.projects = this.projects.concat(projects['results']);
       this.disable_requests = false;
       this.next_page=projects['next'];
     });
   }
   else {
     this.projectService.getProjects(String(this.page_number))
      .subscribe(projects => {
       this.projects = this.projects.concat(projects['results']);
       this.disable_requests = false;
       this.next_page=projects['next'];
     });
   }
  }

  getProjects(): void {
   const stationId = +this.route.snapshot.paramMap.get('stationId');
   const partnerName = this.route.snapshot.paramMap.get('partnerName');

   if (stationId) {
     this.projectService.getStationProjects(String(stationId))
      .subscribe(projects => {
       this.next_page=projects['next'];
       this.projects = projects['results']
     });
   }
   else if (partnerName) {
     this.projectService.search(String(partnerName))
      .subscribe(projects => {
       this.next_page=projects['next'];
       this.projects = projects['results']
     });
   }
   else {
     this.projectService.getProjects()
      .subscribe(projects => {
       this.next_page=projects['next'];
       this.projects = projects['results']
     });
   }
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
