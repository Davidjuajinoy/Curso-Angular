import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interface';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  
  mayuscula:boolean = true;

  nombre:string = "David Andres Hernandez Juajinoy"

  cambiarMayuscula()
  {
    // (this.mayuscula) ?  this.mayuscula=false :this.mayuscula= true;
    this.mayuscula= !this.mayuscula;
  }

  ordenarPor: string  = "";
  heroes:Heroe[] = [
      {
        nombre :"spider man",
        vuela: false,
        color: Color.negro
      },
      {
        nombre :"superman",
        vuela: true,
        color: Color.rojo
      },
      {
        nombre :"venom",
        vuela: false,
        color: Color.negro
      },
      {
        nombre :"batman",
        vuela: false,
        color: Color.negro
      }
  ];

  cambiarOrdenarPor(prop: string)
  {
    this.ordenarPor = prop;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
