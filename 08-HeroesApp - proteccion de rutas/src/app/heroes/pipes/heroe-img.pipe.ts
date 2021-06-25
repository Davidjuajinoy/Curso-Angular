import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImg',
  pure: false // para que se dispare cada que cambie el valor
})
export class HeroeImgPipe implements PipeTransform {

  transform(value: Heroes): string {

    if(!value.id || value.alt_img=='') //al agregar heroe
    {
      return `assets/no-image.png`
    }
    else if(value.alt_img) //editar
    {
      return value.alt_img;
    }else if (!value.alt_img)
    {
      return `assets/heroes/${value.id}.jpg`; //los definidos por defecto
    }
    
    return `assets/no-image.png`

    // if (!value.id && !value.alt_img) {
    //   return `assets/no-image.png`;
    // } else if(value.alt_img) {
    //   return value.alt_img;
    // }else{
    //   return `assets/heroes/${value.id}.jpg`; //los definidos por defecto
    // }
  }

}
