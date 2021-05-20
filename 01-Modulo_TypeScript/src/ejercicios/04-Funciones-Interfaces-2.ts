

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/



const sumarfecha = (a:number ,b:number):number =>{
        return a+b;
}

interface Personaje2{
    nombre: string,
    pv: number,
    habilidades?:string[],
    puebloNatal?:string,//opcional
    mostrarHp:() => void 
}


function curar(personaje:Personaje2,curar:number): void{
    // return undefined //siempre si no esta explicito
    personaje.pv += curar;
    // console.log(personaje);   
}

const david:Personaje2= {
    nombre: "david",
    pv: 10,
    mostrarHp(){
        console.log(this.pv);
    }

}

curar(david,10);
david.mostrarHp();

