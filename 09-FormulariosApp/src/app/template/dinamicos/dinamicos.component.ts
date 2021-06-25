import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre:string;
  favoritos:Favorito[]
}
interface Favorito{
  id:number,
  nombre:string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  persona:Persona = {
    nombre:'David',
    favoritos:[
     {
       id: 1,
       nombre: 'Call of duty'
     },
     {
       id:2,
       nombre: 'Sims4'
     } 
    ]
  }

  guardar(){
    console.log(this.miFormulario?.controls?.nombre);;
  }

  nuevoJuego:string = '';

  agregarJuego():void
  {  
    const nuevoFavorito:Favorito =  
    { 
      id:this.persona.favoritos.length+1,
      nombre: this.nuevoJuego
    } 
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';     
  }

  eliminar(id:number) :void
  { 
      let filtro = this.persona.favoritos.filter( f => f.id != id);
      this.persona.favoritos = filtro;
  }

}
