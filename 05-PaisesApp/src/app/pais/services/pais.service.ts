import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SearchCountriesResponse } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  
  private apiUrl:string ='https://restcountries.eu/rest/v2'
  
  constructor(private http: HttpClient) { }

  // url
  //parametros url
  public get httpParam() : HttpParams {
    return new HttpParams()
    .set('fields','flag;name;capital;population;alpha2Code');
  }
  


  // Empieza la peticion
  buscarPais(termino : string) :Observable<SearchCountriesResponse[]>
  {
    const url =`${this.apiUrl}/name/${termino}`;
    return this.http.get<SearchCountriesResponse[]>(url,{params: this.httpParam});
  }

  buscarCapital(termino : string) :Observable<SearchCountriesResponse[]>
  {
    const url =`${this.apiUrl}/capital/${termino}`;
    return this.http.get<SearchCountriesResponse[]>(url,{params: this.httpParam});
  }
  
  buscarRegion(termino : string) :Observable<SearchCountriesResponse[]>
  {
    const url =`${this.apiUrl}/region/${termino}`;
    return this.http.get<SearchCountriesResponse[]>(url,{params: this.httpParam});
  }

  buscarPaisPorCode(id : string) :Observable<SearchCountriesResponse>
  {
    const url =`${this.apiUrl}/alpha/${id}`;
    return this.http.get<SearchCountriesResponse>(url);
  }


 /*  // Empieza la peticion
  buscarPais(termino : string) : Observable<any>
  {
    const url =`${this.apiUrl}/name/${termino}`;
    return this.http.get(url)
    //! esto es de rxjs  sirve para retornar un array vacio y la funcion of es para que lo que retorne sea un observable
    .pipe(
      catchError( err => of( [] ))
    );
  } */
  
}
