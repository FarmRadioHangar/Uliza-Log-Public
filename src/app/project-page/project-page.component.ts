import { Component, OnInit } from '@angular/core';
import {Project,Country,Program,Comment,Log} from '../models';
import {ProjectService} from '../project.service';
import {ProgramService} from '../program.service';
import {CountryService} from '../country.service';
import {CommentService} from '../comment.service';
import {LogService} from '../log.service';
import {ActivatedRoute} from '@angular/router';
import {Meta} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {PageEvent} from '@angular/material';
import {Env} from '../env';

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
  image_url = Env['image_url'];
  api_url = Env['api_url'];
  project:Project;
  programs:Program[]=[];
  comments:Comment[] = [];
  logs:Log[]=[];
  activeLog:Log={'id':null};
  activeLogLabel = ": Most recent episode";


  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent();

  commentShown=false;
  country_code = '';
  programControl = new FormControl('', []);;
  private countries: { [id: string] : string;} = {};

  floor(num:number): Number {
   return Math.floor(num);
  }

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
     programs => {
        this.programs = programs['results'];
        this.setDefaultProgram();
    });
   }
  }

  setDefaultLog(): void {
   let logId = +this.route.snapshot.paramMap.get('logId');
   console.log(logId,'LOGID')
   if (logId) {
    for (let log in this.logs) {
     if (this.logs[log]['id'] == logId) {
      this.activeLog = this.logs[log];
      this.activeLogLabel = "";
      break;
     }
    }
   }
   else
    this.activeLog = this.logs[this.logs.length-1]
  }

  setDefaultProgram(): void {
   let programId = +this.route.snapshot.paramMap.get('programId');
   if (programId) {
    for (let program in this.programs) {
     if (this.programs[program]['id'] == programId) {
      this.programControl.setValue(this.programs[program]);
      break;
     }
    }
   }
   else
    this.programControl.setValue(this.programs[0]);
  }

  getProjectCountryCode(project: any): void {
   if (project) {
    this.project = project;
    this.countryService.getCountry(String(project['country'])).subscribe(
     country => {this.country_code = country[0]['country_code']});
    this.getProjectPrograms(project)
   }
  }

  fetchLogs(program: any): void {
    this.logService.getProgramLogs(String(program['id'])).subscribe(
     logs => {
               this.logs = logs['results'];
               if (this.logs.length>0) {
                this.loadComments();
                this.setDefaultLog();
               }
             });
  }

  loadComments():void {

   this.commentService.getComments(String(this.activeLog['id'])).subscribe(
     comments => {
       this.comments = comments;
     })

  }


  changeActiveLog(log:any): void {
   this.activeLog = log;

   if (this.activeLog['recording_backup']){
    let audioElement = <HTMLAudioElement> document.getElementById('audio');
    audioElement.pause();
    audioElement.src = this.activeLog['recording_backup'];
   }

   this.activeLogLabel = "";
   this.loadComments()
  }

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private programService: ProgramService,
              private logService: LogService,
              private countryService: CountryService,
              private commentService: CommentService,
              private router: Router,
              private meta: Meta) {
   // <meta name="viewport" content="width=device-width, initial-scale=1">
   this.meta.addTag({name:"viewport", content:"width=device-width, initial-scale=1"});
  }

  ngOnInit() {
   this.getProject();
   this.programControl.valueChanges
      .subscribe(value => this.fetchLogs(value));
   this.pageEvent['pageIndex'] = 0;
  }
}
