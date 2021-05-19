

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

/* 
*los objetos no se ponen asi ,se ponen con interface 
*/
// interface SuperHeroe {
//     nombre:string,
//     edad :number,
//     direccion : {
//         calle:string,
//         pais:string,
//         ciudad:string
//     },
//     mostrarDireccion: () => string 

// }

interface SuperHeroe {
    nombre:string,
    edad :number,
    direccion:Direccion,
    mostrarDireccion: () => string 
}

interface Direccion{
    calle: string,
    pais:string,
    ciudad:string
}

const superHeroe:SuperHeroe = {
    nombre : "David",
    edad : 19,
    direccion: {
        calle: "74 A sur",
        pais : "colombia",
        ciudad: "Bogota"
    },
    mostrarDireccion()
    {
        return ` ${this.nombre} ${this.direccion.ciudad} ${this.direccion.pais}`;
    }
}

console.log(superHeroe.mostrarDireccion());



