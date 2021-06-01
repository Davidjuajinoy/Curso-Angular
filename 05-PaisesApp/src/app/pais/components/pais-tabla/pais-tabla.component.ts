import { Component, Input, OnInit } from '@angular/core';
import { SearchCountriesResponse } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input('paises') paises:SearchCountriesResponse[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
