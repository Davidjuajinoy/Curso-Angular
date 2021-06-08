import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform{
    
    transform(value: string, Enmayusculas:boolean = true) : string {

        return (Enmayusculas) ? value.toUpperCase() : value.toLowerCase();
    }

    
}