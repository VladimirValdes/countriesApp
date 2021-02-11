import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment.prod';

import { CountryResponse } from '../interfaces/country-response';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries: CountryResponse[] = [];

  constructor( private http: HttpClient) { }

  getCountries(): Observable<CountryResponse[]>{

    if ( this.countries.length > 0) {
      console.log('Desde chache');
      return of( this.countries );
    }

    console.log('desde internet');
    return this.http.get<CountryResponse[]>(`${ environment.url }/all`)
               .pipe(
                 tap(
                   countries => this.countries = countries
                 )
               );
  }

  getCountry( name: string ): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(`${ environment.url}/name/${ name }`)
               .pipe(
                 catchError( error => {
                   return of(null);
                 })
               );
  }

  getRegion( region: string): Observable<CountryResponse[]>{
    return this.http.get<CountryResponse[]>(`${ environment.url}/region/${ region }`);
  }

  getCountrybyCode( code: string ): Observable<CountryResponse> {
    return this.http.get<CountryResponse>(`${ environment.url }/alpha/${ code }`)
               .pipe(
                 catchError( error => {
                   return of(null);
                 })
               );
  }
}
