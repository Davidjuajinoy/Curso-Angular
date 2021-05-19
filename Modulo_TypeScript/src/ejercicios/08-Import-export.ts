

console.log('Hola Mundo!');


import { Producto, calcularSV } from './07-Desestructuracion-Argumentos';
//se ejecuta la funcion tambien ese archivo


const carritoCompras: Producto[] =[
    {
        des: "telefono2",
        precio: 100
    },
    {
        des: "telefono3",
        precio: 100
    }
]

const [total,isv] = calcularSV( carritoCompras);

console.log(`Total ${total}`);
console.log(`Total ${isv}`);

