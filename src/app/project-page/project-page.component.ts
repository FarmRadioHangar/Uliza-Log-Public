import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  project = false;
  commentShown=false

  toggleCommentShown(): void {
   if (this.commentShown){
    this.commentShown = false;
   }
   else {
    this.commentShown = true;
   }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

   console.log('project-page',+this.route.snapshot.paramMap.get('stationId') );
  }
}
