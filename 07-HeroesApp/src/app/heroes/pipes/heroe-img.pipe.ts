import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImg'
})
export class HeroeImgPipe implements PipeTransform {

  transform(value: Heroes): string {
    return `assets/heroes/${value.id}.jpg`;
  }

}
