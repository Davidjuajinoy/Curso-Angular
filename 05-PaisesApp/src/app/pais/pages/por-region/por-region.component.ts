import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { SearchCountriesResponse } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      
    }
  `]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva :string= '';

  paises: SearchCountriesResponse[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion( region:string)
  {
    if(region === this.regionActiva) return;
    this.regionActiva= region;
    this.paises = [];

      this.paisService.buscarRegion(region)
      .subscribe( resp =>{
        this.paises = resp;
      });

  }

  getClaseCCS(region:string) :string
  {
    return (region === this.regionActiva) ? 'active' : '';
  }


}
