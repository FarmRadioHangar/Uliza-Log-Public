import { Injectable } from '@angular/core';
import {Country} from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable <Country[]> {
   const country_url = Env.api_url+'countries?ordering=id';
   return this.http.get<Country[]>(country_url);
  }

  getCountry(country_id:String='1'): Observable <Country[]> {
   const country_url = Env.api_url+'countries?id='+country_id;
   return this.http.get<Country[]>(country_url);
  }
}
