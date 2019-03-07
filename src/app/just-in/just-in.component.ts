import { Component, OnInit } from '@angular/core';
import {Log} from '../models';
import {LogService} from '../log.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-just-in',
  templateUrl: './just-in.component.html',
  styleUrls: ['./just-in.component.css']
})
export class JustInComponent implements OnInit {
  dataSource : Log[];
  displayedColumns: string[] = [ 'program__name','created_at'];

  constructor(private logService: LogService,
              private route: ActivatedRoute) { }

  getLogs(): void{
   var stationId: any = +this.route.snapshot.paramMap.get('stationId');
   if (!stationId){
    stationId = '';
   }
   this.logService.getLogs(String(stationId))
       .subscribe(logs => this.dataSource = logs['results']);
  }
  ngOnInit() {
   this.getLogs();
  }

}
