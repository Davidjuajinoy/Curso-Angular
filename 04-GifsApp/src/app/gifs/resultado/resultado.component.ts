import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit {

  constructor(private gifService:GifsService) { }

  ngOnInit(): void {
  }

  
  public get resultado(){
    return this.gifService.resultados;
  }
  

}
