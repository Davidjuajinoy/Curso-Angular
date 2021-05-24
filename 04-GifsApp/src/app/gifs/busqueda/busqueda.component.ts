import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  //Sirve para buscar , puede ser una referencia creada , o por el html,directivas,clases etc.
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;  //estar siempre seguro q el elemento va estar en el html
  /* mas info en 
  ! www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator 
  ? se pone !: para que le de la afirmacion de que va a estar siempre */


  buscar(){
    const valor=this.txtBuscar.nativeElement.value;
    if (valor != "" ) {
      this.gifsService.buscarGifs(valor)
    }
    this.txtBuscar.nativeElement.value="";
  }

/*   buscar(value:string){
    console.log(value);

  } */

}
