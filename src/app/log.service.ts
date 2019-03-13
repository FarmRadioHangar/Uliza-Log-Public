import { Injectable } from '@angular/core';
import {Log,Program} from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) {}

  getLogs(stationId:String=''): Observable <Log[]> {
   const log_url = Env.api_url+'logs?page=1&page_size=11&program__radio_station='+
                   stationId+'&ordering=-created_at&postpone=False&country__not='+
                   Env.exclude_countries;

   return this.http.get<Log[]>(log_url);
  }
  getProgramLogs(programId:String=''): Observable <Log[]> {
   const log_url = Env.api_url+'logs?postpone=false&program='+programId;

   return this.http.get<Log[]>(log_url);
  }
}
