import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string='';
  heroes:Heroes[] =[];
  heroeSeleccionado?:Heroes;
  constructor(private heroeService:HeroesService) { }

  ngOnInit(): void {
  }

  buscar()
  {
    if (this.termino != '') {
      this.heroeSeleccionado=undefined;
      this.heroeService.getHeroeByName(this.termino.trim()).subscribe(res => this.heroes=res); 
    }
    
  }


  opcionSeleccionada(e:MatAutocompleteSelectedEvent)
  {
    if(this.termino != '' && this.heroes.length > 0)
    {
      const heroe: Heroes = e.option.value;
      this.termino=heroe.superhero;
      this.heroeService.getHeroeById(heroe.id!).subscribe(resp => this.heroeSeleccionado=resp);
    }
  }

  

}
