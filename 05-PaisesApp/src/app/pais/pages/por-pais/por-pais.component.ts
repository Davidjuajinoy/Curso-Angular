import { Component, OnInit } from '@angular/core';
import { SearchCountriesResponse } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent implements OnInit {


  termino : string = ''; //buscador input 
  existeError:boolean = false;
  paises: SearchCountriesResponse[] = [];

  paisesSugeridos: SearchCountriesResponse[] = []; 
  mostrarSugerencias: boolean = false;


  constructor(private paisServices:PaisService) { }
  
  buscar(termino :string) 
  {
    this.existeError=false
    this.termino = termino;
    this.mostrarSugerencias= false;
    // console.log(termino);
    //continuo la peticion esperada en el servicio.
    this.paisServices.buscarPais(termino)
      .subscribe( paises => {
        // console.log(paises);
        this.paises= paises;
      },
      //manejar errores de http 
      (err) =>{
        this.existeError= true;
        this.paises= [];
      });
    
  }

  sugerencias(termino :string){
    this.existeError= false;
    this.termino = termino;
    this.mostrarSugerencias= true;
    this.paisServices.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos=paises.splice(0,3),
    err => this.paisesSugeridos=[]
    );
    
  }



  ngOnInit(): void {
  }

}
