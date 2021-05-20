import { Component } from "@angular/core";

@Component({
    selector : `app-contador`,
    template: `
        <h1>{{ titulo }}</h1>
        <h2> {{ (5+1)*4  }} </h2>
        <h3>La base es: <b>{{ base }}</b></h3>

        <!-- <button (click)="contador = contador+1"> +1 </button> -->
        <button (click)="acumular(+1)"> {{base}}</button>
        <span> {{ contador }} </span>
        <button (click)="acumular(-1)"> {{base}}</button>
        `
})


export class ContadorComponent{
    titulo = 'Contador';
    public titulo2:String = 'Titulo2';
    contador:number = 0;
    base:number = 5;
  
    acumular(valor:number) :void
    {
      
      this.contador+=(valor < 0) ? -this.base : this.base ;
    }
}