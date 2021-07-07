import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern: string = '^([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor() { }

  noPuedeSerStriker(form: FormControl) :ValidationErrors | null {
    const valor = form.value?.trim().toLowerCase();
    console.log(valor);
    return (valor == "striker") ? { noStriders: true } : null
    //si se envia un objeto es considerado un error
  }


  campoIguales(campo1: string , campo2:string)
  {
      return (formGroup: AbstractControl) :ValidationErrors | null  => {
        const pass1 = formGroup.get(campo1)?.value;
        const pass2 = formGroup.get(campo2)?.value;
        
        if(pass1 !== pass2)
        {
          formGroup.get(campo2)?.setErrors({noIguales:true});
          return {noIguales:true}
        }
        return null;
      }
  }
}
