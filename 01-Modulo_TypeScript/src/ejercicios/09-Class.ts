

console.log('Hola Mundo!');

//! Esto solo sirve en Typescript en js no deja poner encapsulamiento
// class Heroe {
//     private alterEgo:string;
//     private edad:number;
//     private nombreReal:string;
//     constructor(alterEgo:string ,edad:number ,nombreReal:string)
//     {
//         this.alterEgo=alterEgo;
//         this.edad=edad;
//         this.nombreReal=nombreReal 
//     }

// }

// !Forma corta de definir Clase
class PersonaNormal{
    constructor(
         nombre:string, 
         direccion:string,
    ) {};
}

class Heroe extends PersonaNormal {

    constructor(
        private alterEgo:string , 
        private edad:number ,
        private nombreReal:string,
        private direccion:string
    ){
        super(nombreReal,direccion);
    }

    public getAlterEgo() : string {
        return this.alterEgo
    }
    
}



//no sirve para instanciar ni para definir las propiedades
interface Persona{
     alterEgo:string;
     edad:number;
     nombreReal:string;
}

const ironman = new Heroe("IronMan",50,"Tony Stars","New York");

console.log(ironman);
console.log(ironman.getAlterEgo());



