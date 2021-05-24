import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';


//! https://app.quicktype.io/ pagina para crear interfaces de un Json
@Injectable({
  providedIn: 'root' //va ser global en el bundle entonces no toca insertalo en providers de module
})


export class GifsService {

  private apiKeyGifs:string ='5O0NAO9N0MOmiZrP7kJt4ba06o2UyIBx';
  private servicioUrl:string ='https://api.giphy.com/v1/gifs';
  private _historial:string[] =[];

  // Tipo de dato es agregado por una interfaz
  public resultados: Gif[] =[];
  
  public get historial() : string[] {
    return [...this._historial]
  }
  
  constructor(private http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query:string ='')
  {
    query = query.trim().toLowerCase();
    if ( !this._historial.includes(query) ) {
      this._historial.unshift(query); //lo instar en la posicion [0]
      this._historial = this._historial.splice(0,10); //para que almacene solo 10 corta el arreglo
      // console.log(this.historial);
      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    const params = new HttpParams()
    .set('api_key',this.apiKeyGifs)
    .set('limit','20')
    .set('q',query);

    // console.log(`${this.servicioUrl}/search`,{params})

    //retorna Observable es opcional poner el <T> pero si se tiene si se debe usar
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe( (resp) => {
      // console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify( this.resultados));

    });
   
  }

}
