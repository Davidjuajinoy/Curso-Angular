import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private urlBase: string = environment.baseUrl;

  constructor(private http:HttpClient){ }

  // getUsuariosRedesSociales(){
  //   return this.http.get(`${this.urlBase}/grafica`);
  // }

  getUsuariosRedesSocialesRxjs()
  {
    return this.http.get(`${this.urlBase}/grafica`)
    .pipe(
      map(data =>{
        const labels = Object.keys(data);
        const values = Object.values(data);
        return {labels,values}
      })
    )
    ;
  }
}
