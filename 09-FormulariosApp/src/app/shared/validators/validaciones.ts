import { FormControl } from "@angular/forms";

//Temporalmente
const nombreApellidoPattern: string = '^([a-zA-Z]+) ([a-zA-Z]+)';
const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

function noPuedeSerStriker(form: FormControl) {
    const valor = form.value?.trim().toLowerCase();
    console.log(valor);
    return (valor == "striker") ? { noStriders: true } : null
    //si se enviar un objeto es considerado un error
}

export {
    nombreApellidoPattern,
    emailPattern,
    noPuedeSerStriker
}