import { Injectable } from '@angular/core';
import {Program} from './models';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  getPrograms(): Observable <Program[]> {
   const program_url = Env.api_url+'programs?page=1&page_size=10&ordering=-created_at&country__not='+Env.exclude_countries;
   return this.http.get<Program[]>(program_url);
  }

}
