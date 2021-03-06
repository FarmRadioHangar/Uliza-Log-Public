import { Component, OnInit } from '@angular/core';
import {Program} from '../models';
import {ProgramService} from '../program.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  dataSource : Program[];
  displayedColumns: string[] = ['radio_station__name','project__name', 'program_type'];

  constructor(private programService: ProgramService,
              private route: ActivatedRoute) { }

  getPrograms(): void{
   var stationId:any = +this.route.snapshot.paramMap.get('stationId');
   const partnerName:any = this.route.snapshot.paramMap.get('partnerName');

   if(!stationId)
    stationId = '';

   if(partnerName) {
    this.programService.getSearchPrograms(String(partnerName))
       .subscribe(programs=> this.dataSource = programs['results']);
   }
   else {
    this.programService.getPrograms(String(stationId))
       .subscribe(programs=> this.dataSource = programs['results']);
   }
  }

  ngOnInit() {
   this.getPrograms();
  }
}
