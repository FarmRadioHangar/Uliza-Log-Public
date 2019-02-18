import { Component, OnInit } from '@angular/core';
import {Log} from '../models';
import {LogService} from '../log.service';

@Component({
  selector: 'app-just-in',
  templateUrl: './just-in.component.html',
  styleUrls: ['./just-in.component.css']
})
export class JustInComponent implements OnInit {
  dataSource : Log[];
  displayedColumns: string[] = [ 'program__name','created_at'];

  constructor(private logService: LogService) { }

  getLogs(): void{
   this.logService.getLogs()
       .subscribe(logs => this.dataSource = logs['results']);
  }
  ngOnInit() {
   this.getLogs();
  }

}
