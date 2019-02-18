import { Injectable } from '@angular/core';
import {Log} from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) {}

  getLogs(): Observable <Log[]> {
   const log_url = Env.api_url+'logs?page=1&page_size=11&ordering=-created_at&postpone=False&country__not='+Env.exclude_countries;
   return this.http.get<Log[]>(log_url);
  }
}
