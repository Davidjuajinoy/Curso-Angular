import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
 
  // @Input()
   nuevo:Personaje = {
    nombre: '',
    poder: 0
  }
  //! Asegurar de que se impor de @angular/core y no de events 
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  // //?FormsModule tradicional se requiere
  // enviar()
  // { 
  //   if(this.nuevo.nombre.trim().length != 0)
  //   {

  //     //?limpiar
  //     console.log(this.nuevo);
  //     //? emision a padre
  //     this.onNuevoPersonaje.emit( this.nuevo);

  //     console.log("Enviar");
  //     this.nuevo = {
  //       nombre: "",
  //       poder:0
  //     }
  //   }
  // }

  constructor(private dbzService:DbzService)
  {}
  
  enviar()
  {
      if(this.nuevo.nombre.trim().length != 0)
      {
        //limpiar
        console.log(this.nuevo);
        //?servicio
        this.dbzService.agregarNuevoPersonaje( this.nuevo);

        console.log("Enviar");
        this.nuevo = {
          nombre: "",
          poder:0
        };
      }
  }

}
