import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombre : string = 'DaVID JuAjiNOY';

  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
