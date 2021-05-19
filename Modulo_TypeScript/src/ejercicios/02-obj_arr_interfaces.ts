

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
let habilidades:(boolean | string |number)[] ;

habilidades = ["david","hernandez","juajinoy"]



interface Personaje{
    nombre: string,
    hp: number,
    habilidades:string[],
    puebloNatal?:string //opcional
}

const personaje:Personaje = {
    nombre: 'david',
    hp: 100,
    habilidades: ["david"]
}

personaje.puebloNatal="Bogota";

console.table(personaje);
