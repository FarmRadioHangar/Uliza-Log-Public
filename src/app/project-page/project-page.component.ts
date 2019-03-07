import { Component, OnInit } from '@angular/core';
import {Project,Country,Program} from '../models';
import {ProjectService} from '../project.service';
import {ProgramService} from '../program.service';
import {CountryService} from '../country.service';
import {ActivatedRoute} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['../app.component.css','../project-cards/project-cards.component.css',
  './project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  project = {};
  programs = [];
  commentShown=false;
  country_code = '';
  programControl = new FormControl('', []);;
  private countries: { [id: string] : string;} = {};

  toggleCommentShown(): void {
   if (this.commentShown){
    this.commentShown = false;
   }
   else {
    this.commentShown = true;
   }
  }

  getProject():void {
   const projectId = +this.route.snapshot.paramMap.get('projectId');
   if (!projectId)
    this.router.navigate(['/']);
   else
    this.projectService.getProject(String(projectId)).subscribe(
       project => {this.getProjectCountryCode(project['results'][0])});

  }

  getProjectPrograms(project: any):void {
   if (project) {
    this.programService.getProjectPrograms(String(project['id'])).subscribe(
     programs => {this.programs = programs['results'];this.programControl.setValue(this.programs[0]);
    });
   }

  }

  getProjectCountryCode(project: any): void {
   if (project) {
    this.project = project;
    this.countryService.getCountry(String(project['country'])).subscribe(
     country => {this.country_code = country[0]['country_code']});
    this.getProjectPrograms(project)
   }
  }

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private programService: ProgramService,
              private countryService: CountryService,
              private router: Router,
              private meta: Meta) {
   // <meta name="viewport" content="width=device-width, initial-scale=1">
   this.meta.addTag({name:"viewport", content:"width=device-width, initial-scale=1"});
  }

  ngOnInit() {
   this.getProject();
  }
}
