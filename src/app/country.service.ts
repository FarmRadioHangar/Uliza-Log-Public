import { Injectable } from '@angular/core';
import {Country} from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable <Country[]> {
   const country_url = 'http://localhost:3000/api/v1/countries?ordering=id';
   return this.http.get<Country[]>(country_url);
  }

  getCountry(country_id:String='1'): Observable <Country[]> {
   const country_url = 'http://localhost:3000/api/v1/countries?id='+country_id;
   return this.http.get<Country[]>(country_url);
  }
}
