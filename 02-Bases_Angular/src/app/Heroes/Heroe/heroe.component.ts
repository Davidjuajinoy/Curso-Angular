import { Component } from "@angular/core";


@Component({
    selector : `app-heroe`,
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre:string = 'ironman';
    edad:number = 21;


    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }

    
    public set cambiarEdad(v : number)  {
         this.edad = v;
    }
    
    
    cambiarNombre() :void
    {
        this.nombre = 'Spiderman';
    }

    

    obtenerNombre() :string
    {
        return `${this.nombre} - ${this.edad}`;
    }

}
