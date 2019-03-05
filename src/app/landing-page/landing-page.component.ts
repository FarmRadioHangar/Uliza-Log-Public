import { Component, OnInit } from '@angular/core';
import {RadiostationService} from '../radiostation.service'
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css','../app.component.css']
})
export class LandingPageComponent implements OnInit {

 radiostation = null

 getStation(id):void {
   this.radioStationService.getStation(id).subscribe(radiostation => this.radiostation = radiostation[0])
 }
  constructor(
   private radioStationService: RadiostationService,
   private route: ActivatedRoute,
   private http: HttpClient) {}

  ngOnInit() {
   const stationId = +this.route.snapshot.paramMap.get('stationId');

   if (stationId)
    this.getStation(stationId);
  }

}
