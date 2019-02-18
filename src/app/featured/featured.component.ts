import { Component, OnInit } from '@angular/core';
import {Program} from '../models';
import {ProgramService} from '../program.service'

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  dataSource : Program[];
  displayedColumns: string[] = ['radio_station__name','project__name', 'program_type'];

  constructor(private programService: ProgramService) { }

  getPrograms(): void{
   this.programService.getPrograms()
       .subscribe(programs=> this.dataSource = programs['results']);
  }

  ngOnInit() {
   this.getPrograms();
  }
}
