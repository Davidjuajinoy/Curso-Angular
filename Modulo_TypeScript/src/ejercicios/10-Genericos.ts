

console.log('Hola Mundo!');



// !Genericos 

function queTipoSoy<T>(arg:T) :T  
{
    return arg;
}


let string =queTipoSoy('hola mundo');

let numero =queTipoSoy(4);
let SoyArreglo =queTipoSoy([1,2,3,4,5,6]);

