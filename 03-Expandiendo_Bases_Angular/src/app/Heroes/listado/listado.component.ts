import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log('constructor Listado');
  }

  ngOnInit(): void {
    console.log("ngOnInit listado")
  }

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Salchiman'];

  heroesBorrado: string[] = [];
  borraHeroe()
  {
    console.log('borrando....')
    const heroeBorrado =this.heroes?.shift()|| '';
    if(heroeBorrado != '') this.heroesBorrado.push(heroeBorrado);
   

    
    // this.heroes.pop();
  }

  
}
