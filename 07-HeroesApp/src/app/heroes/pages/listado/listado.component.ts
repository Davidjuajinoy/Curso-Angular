import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heroeService:HeroesService) { }

  heroes:Heroes[] = [];
  
  ngOnInit() {
    this.heroeService.getHeroes().subscribe(resp =>{
      this.heroes = resp;
    }); 
  }

}
