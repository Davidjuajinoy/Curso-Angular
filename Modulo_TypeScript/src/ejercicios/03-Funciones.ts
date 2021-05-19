

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

function sumar (a:number,b:number):number
{
    return a+b;
}

const resultado = sumar(1,3);

console.log(resultado);


const sumar2 = (a:number,b:number) :number => {
    return a+b
};

console.log(sumar2(10,20));


function multiplicar(numero:number, otroNumero?: number , base:number = 2) :number{
    return numero*base;
}
//orden  requerido,  ? opcionales , despues definidos si no se cumpleeste orden da error

const resultado2 = multiplicar(10);

console.log(resultado2);



