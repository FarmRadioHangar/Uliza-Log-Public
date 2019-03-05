import { Injectable } from '@angular/core';
import {Radiostation} from './models';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class RadiostationService {

  constructor(private http: HttpClient) {}

  getStation(id:String): Observable <Radiostation[]> {
   const station_url = Env.api_url+'radio_stations?id='+id;
   return this.http.get<Radiostation[]>(station_url);
  }


  search(string:String): Observable <Radiostation[]> {
   const station_url = Env.api_url+'radio_stations?search='+string;
   return this.http.get<Radiostation[]>(station_url);
  }

}
