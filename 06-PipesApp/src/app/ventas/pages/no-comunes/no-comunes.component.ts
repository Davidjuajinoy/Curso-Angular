import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //? I18NSELECT
  nombre:string = "David";
  genero:string = "masculino";

  invitacionMapping= {
    'masculino': 'invitarlo',
    'femenino':'invitarla'
  }

  cambiarGenero() :void
  {
    if( this.nombre == "David")
    {
      this.nombre ="susan" ;
      this.genero ="femenino";
    }else{
      this.nombre = "David";
      this.genero ="masculino";
    }
  }

  // ? I18NPLURAL
  clientes:string[] =['sandra','david','juan']
  clientesMapping ={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos #  clientes esperando'  
  }

  borrarCliente()
  {
    this.clientes.pop();
  }

  // ? KeyValuePipe
  persona={
    nombre: 'David',
    edad:19,
    direccion: 'Ottawa, Canada'
  }

  //? Json
  heroe = [
    {
      "nombre" : "Batman",
      "poder": 100
    },
    {
      "nombre" : "Batman",
      "poder": 100
    },
    {
      "nombre" : "carbon",
      "poder": 100
    }
  ]

  //? Async
  miObservable = interval(1000);

  miPromesa = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Fin de la promesa');
      },5000);
  })

  constructor() { }

  ngOnInit(): void {
  }

}
