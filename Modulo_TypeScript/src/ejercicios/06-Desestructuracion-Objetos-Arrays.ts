

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumne: number,
    segundo: number,
    cancion: string,
    detalles:Detalles
}
interface Detalles{
    autor: string,
    year : number
}

const reproductor:Reproductor = {
    volumne: 90,
    segundo: 36,
    cancion: "lalala",
    detalles:{
        autor: "David Juajinoy",
        year: 2020
    }
}

 //!desestructuracion
 //?no se recomienda extraer el objeto completo y acceder por detalle.autor 
 
 //?En una sola linea
 //const {volumne,segundo,cancion,detalles: {autor, year} } = reproductor;

 //? Se recomienda asi para mayor entendimiento
const {volumne,segundo,cancion, detalles} = reproductor;
// const {autor, year} = detalles;

//! cambiar el nombre a la desestructuracion
const {autor:autorDetalles, year} = detalles;

console.log(`${volumne}`);
console.log(`${segundo}`);
console.log(`${cancion}`);
console.log(`${autorDetalles}`);
console.log(`${year}`);


/*
    ===== Código de TypeScript =====
*/
// !Desestructuracion de Arrays
const dbz : string[] =['goku','vegeta,','trunks'];
// const [,,p3] = dbz traer la posicion 3 solo
const [p1, ,p3] = dbz //traer 2 posiciones solo

console.log(p1);
console.log(p3);