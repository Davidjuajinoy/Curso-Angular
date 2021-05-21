import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //? Se puede hacer tambien asi trayendo los datos del servicio con un GET
   //? inyeccion de dependencias
  //  constructor(private dbzService: DbzService) { 
      /* this.personajes = this.dbzService.personajes; */
  // }
  // get personajes() :Personaje[]
  // {
  //   return this.dbzService.personajes;
  // }

    ngOnInit(): void {
    }

  // enviar(event: any)
  // {
  //   event.preventDefault();
  //   console.log("Enviar");
  // }

  

  

}
