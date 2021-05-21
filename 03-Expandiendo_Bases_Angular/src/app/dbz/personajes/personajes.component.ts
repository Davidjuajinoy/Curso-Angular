import { Component, Input } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})


/*
 ? Para llamar personajes de el componente padre en este caso Main.pageComponent se utiliza input
   y se le envia el parametro desde el maincomponent cuando se llame
*/
export class PersonajesComponent {

  //personajes para cambiar nombre poner en el input el nombre
  // @Input('data') personajes:Personaje[] = []

  constructor(private dbzService:DbzService){}

  get personajes() : Personaje[] {
    return this.dbzService.personajes;
  }
  


}
