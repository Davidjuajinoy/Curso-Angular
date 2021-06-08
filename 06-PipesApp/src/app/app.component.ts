import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesNg';
  nombre:string = "david";
  valor:number = 10000000;
  correo:string = "davidJuaJINOy@hotmail.com";


  mostrarConsola()
  {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.correo);
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
