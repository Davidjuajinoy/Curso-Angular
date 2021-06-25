import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeSuperhero'
})
export class HeroeSuperheroPipe implements PipeTransform {

  transform(value: Heroes): unknown {
    
    return value.superhero;
  }

}
