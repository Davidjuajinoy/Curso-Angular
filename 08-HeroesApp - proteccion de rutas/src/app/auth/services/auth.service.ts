import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';
import { map, tap } from "rxjs/operators";
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  private _auth!:Auth | undefined;
  constructor(
    private http:HttpClient) { }

  login()
  {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe( //para que se ejecute algo antes de que termine la respuesta
      tap(usuario => {this._auth=usuario
          localStorage.setItem('id',usuario.id);
      }) //guardamos el usuario en una variable
    )
    ;
  }


  verificaAutentificacion() :Observable<boolean> 
  {
    if (!localStorage.getItem('id')) {
      //crea observable con of
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      //sirve para recibir y cambiar el dato
      map(reps => {
        
        this._auth=reps;
        
        return true
      })
    );
  }

  logout()
  {
    localStorage.removeItem('id');
    this._auth= undefined;
  }
  
  get auth() : Auth {
    return {...this._auth!};
  }
  

}
