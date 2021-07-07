import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Region } from '../interfaces/region';
import { combineLatest, Observable, of } from 'rxjs';
import { Frontera } from '../interfaces/frontera';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl : string = "https://restcountries.eu/rest/v2";
  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  constructor(
    private http:HttpClient
  ) { }

  
  public get regiones() : string[] {
    return [...this._regiones];
  }

  
  //Paises Por continente
  getpaisesPorRegion(region:string) : Observable<Region[] | null> {
    if(!region)
    {
      return of(null);
    }
    const url:string = `${this.baseUrl}/region/${region}`;
    const params = new HttpParams()
    .set('fields','alpha3Code;name');

    return this.http.get<Region[]>(url, {params:params} );
  }

  // Fronteras en CODE "COL" por pais
  getFronteraPorPais(paisCode: string): Observable<Frontera | null>{

    if(!paisCode)
    {
      return of(null);
    }

    const url: string = `${this.baseUrl}/alpha/${paisCode}`;
    const params = new HttpParams()
    .set('fields','borders;');

    return this.http.get<Frontera>(url,{params:params});
  }

  //Frontera en Nombre "COLOMBIA" por Code(COL)
  getPaisPorAlphaCode(fronteraCode: string): Observable<Region>{

    const url: string = `${this.baseUrl}/alpha/${fronteraCode}`;
    const params = new HttpParams()
    .set('fields','name;alpha3Code');
    return this.http.get<Region>(url,{params:params});
  }
  
  //Convertir fronteras de COL a Colombia (usando varias peticiones)
  getPaisesPorAlphaCode(fronterasCode: string[]): Observable<Region[]> {

    if(!fronterasCode)
    {
      return of([]);
    }
    const peticiones : Observable<Region>[] = [];

    fronterasCode.forEach( code => {
      const peticion = this.getPaisPorAlphaCode(code);
      peticiones?.push(peticion);
    })

    //ejecutar varios suscribes , retorna un observable con la un array de la data de todas la peticiones
    return combineLatest(peticiones);
  }
  


  
}
