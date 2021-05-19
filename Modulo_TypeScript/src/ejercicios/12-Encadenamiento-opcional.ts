

console.log('Hola Mundo!');

// ! Funcionalidad del ? Sirve en JS 

interface Pasajero{
    nombre:string,
    hijos?:string[] //SIRVE PARA QUE EL PARAMETRO SEA OPCIONAL
}

const pasajero1:Pasajero = {
    nombre: "David",
}

const pasajero2:Pasajero = {
    nombre: "Sandra",
    hijos : ['sergio','nasly','david']
}

function calcularHijos(pasajero:Pasajero) {
    const Nhijos = pasajero.hijos?.length || 0; //?SIRVE PARA QUE EL PARAMETRO SE EVALUE POR EJEMPLO SI EN pasajero.hijos no tiene ninguno entonces saldria que undefined , pero con el condicional se hace como un if entonces pregunta si hijos es undefined tomara el valor de 0 pero si puede ejecutar el .lenght entonces tomara el numero q tenga
    return Nhijos;
}

console.log(calcularHijos(pasajero2));
