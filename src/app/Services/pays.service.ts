import { Injectable } from '@angular/core';
import {Country} from '../Model/country';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const API_LINK = 'https://restcountries.eu/rest/v2/all/';
const API_Base= 'https://restcountries.eu/rest/v2/name/';
const API_R='https://restcountries.eu/rest/v2/region/';
@Injectable({
  providedIn: 'root'
})
export class PaysService {
  countrys: Country[];
  country:Country;
  selectItemSubject = new Subject<Country>();
  constructor( private http: HttpClient) { }

  getAllCountrys(): Observable<Country[]> {
    return this.http.get<Country[]>(API_LINK);
  }
  getCountryByName(name): Observable<Country> {
    return this.http.get<Country>(API_Base + name);
  }
  getCountryByRegion(region): Observable<Country[]> {
    return this.http.get<Country[]>(API_R + region);
  }

}
