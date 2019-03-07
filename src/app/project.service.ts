import { Injectable } from '@angular/core';
import {Project,Country} from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Env} from './env';
// import {apiUrl} from '../environment.ts'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // backendUrl = string = apiUrl;

  constructor(private http: HttpClient) {}

  getProject(projectId:String='1'): Observable <Project[]> {
   const project_url = Env.api_url+'projects?id='+projectId;
   return this.http.get<Project[]>(project_url);
  }

  getProjects(page_number:String='1'): Observable <Project[]> {
   const project_url = Env.api_url+'projects?ordering=-id&page='+String(page_number)+
                          '&page_size=5&country__not='+Env.exclude_countries;
   return this.http.get<Project[]>(project_url);
  }

  getStationProjects(stationId:String='',page_number:String='1'): Observable <Project[]> {
   const project_url = Env.api_url+'radio_stations/'+stationId+'/projects?ordering=-id&page='+String(page_number)+
                          '&page_size=5&country__not='+Env.exclude_countries;
   return this.http.get<Project[]>(project_url);
  }

  search(string:String): Observable <Project[]> {
   const project_url = Env.api_url+'projects?search='+string+'&country__not='+Env.exclude_countries;
   return this.http.get<Project[]>(project_url);
  }

}
