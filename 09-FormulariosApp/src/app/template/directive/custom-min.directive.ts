import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]', //asociarla 
    providers:[
        {
            provide: NG_VALIDATORS,
            useExisting: CustomMinDirective,
            multi:true
        }
    ]
})
export class CustomMinDirective implements Validators{

    @Input() minimo!: number;

    constructor(

    ){}

    validate(control : FormControl)
    {
        const inputValue = control.value;
        console.log(this.minimo);
        return (inputValue < this.minimo ) ? {'customMin':true} : null;
        
    }
}