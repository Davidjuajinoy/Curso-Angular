

console.log('Hola Mundo!');


export interface Producto {

    des:string,
    precio: number
}

const telefono: Producto ={
    des: "Huawei",
    precio: 200
}

const pc: Producto ={
    des: "portatil",
    precio: 500
}

//!Desestructuracion de Argumentos
export function calcularSV(productos: Producto[]) :number[]
{
    let total = 0;
    productos.forEach(  (  {precio} /* desestructura un argumento */ ) => {
        total += precio
    } );

    return [total,total*0.15]; //0.15 es el iva o algo asi
}

const articulos:Producto[] =[  telefono, pc ];
//?  se desestrutura el array retornado por calcularsv
const [total, isv] = calcularSV(articulos);

console.log(total);
console.log(isv);
