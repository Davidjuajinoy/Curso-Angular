import { Component, OnInit } from '@angular/core';


enum genero{
  Masculino,
  Femnino
}



@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  persona = {
    genero: 'M',
    notificaciones: false,
  }
  
  terminosYCondiciones: boolean = false;
}
