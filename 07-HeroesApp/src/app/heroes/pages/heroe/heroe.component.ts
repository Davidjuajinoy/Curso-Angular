import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`.img-fluid{width:100%;}`
  ]
})
export class HeroeComponent implements OnInit {

  // id:string = '';
  heroe!:Heroes;
  constructor(
    private activatedRoute:ActivatedRoute,
    private heroeService:HeroesService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroeService.getHeroeById(id))
    ).subscribe(heroe => this.heroe=heroe);

    
    // this.heroeService.getHeroeById(this.id).subscribe(resp => this.heroe=resp);
    // this.activatedRoute.params.subscribe( ({id}) =>{
    //     this.id= id;
    // })
    // this.heroeService.getHeroeById(this.id).subscribe(resp => this.heroe=resp);
    
  }

  regresar()
  {
    this.router.navigate(['/heroes/listado']);
  }

  
}
