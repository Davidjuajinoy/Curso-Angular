import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //para los cambios de url
import { switchMap, tap } from "rxjs/operators";
import { PaisService } from '../../services/pais.service';
import { SearchCountriesResponse } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: SearchCountriesResponse;
  //puede ser nulo !

  constructor(
    private activedRoute:ActivatedRoute,
    private paisService:PaisService
    ) { }

/* *Sin rxjs   
ngOnInit(): void 
  {
    this.activedRoute.params.subscribe( ({id}) => {
      console.log(id);
      this.paisService.buscarPaisPorCode(id).subscribe( (pais) => {
        console.log(pais)
      });
    });
    //me trae el parametro id que definimos en la ruta anterior  path:'pais/:id'
  } */


  // con rxjs switchMap
  ngOnInit(): void 
    {
      //recibe el code de la url
      this.activedRoute.params
      .pipe(
        //manda a llamar la peticion con el code la url
        switchMap( (param) => this.paisService.buscarPaisPorCode(param.id) ),
        tap(resp => console.log(resp))
      )
      //muestra el pais buscado
      .subscribe( resp  => {
         this.pais = resp;
      });
      //me trae el parametro id que definimos en la ruta anterior  path:'pais/:id'
    }



}
