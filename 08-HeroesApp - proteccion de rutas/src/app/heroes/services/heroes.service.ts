import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Heroes } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getHeroes(): Observable<Heroes[]>
  {
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`); 
  }
  getHeroeById(id:string): Observable<Heroes>
  {
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`); 
  }
  getHeroeByName(query:string): Observable<Heroes[]>
  {
    const params = new HttpParams()
    .set('q',query)
    .set('_limit',5);
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`,{params}); 
  }

  agregarHeroe(heroe:Heroes) : Observable<Heroes>
  { 
    return this.http.post<Heroes>(`${this.baseUrl}/heroes`, heroe );
  }

  actualizarHeroe(heroe:Heroes) : Observable<Heroes>
  { 
    return this.http.put<Heroes>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  EliminarHeroe(heroe:Heroes) : Observable<Heroes>
  { 
    return this.http.delete<Heroes>(`${this.baseUrl}/heroes/${heroe.id}`);
  }

}
