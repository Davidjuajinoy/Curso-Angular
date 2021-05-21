import { Injectable } from "@angular/core";
import { Personaje } from '../Interfaces/dbz.interface';

//data-logica
@Injectable()
export class DbzService{
    
    private _personajes:Personaje[] = [
        {
          nombre: "Krillin",
          poder: 4000
        },
        {
          nombre: "goku",
          poder: 15000
        }
    ];

    constructor() {
        console.log("servicio DbzService Inicializado");
        
    }

    get personajes() :Personaje[]
    {
        //evitar por referencia haciendo uso de spread
        return [...this._personajes];
    }

    agregarNuevoPersonaje(event:Personaje)
    {
        this._personajes.push(event);
        console.log("Main Page Component")
    }


    
}