import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 
//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import { environment } from '../../../../environments/environment';

 


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: []
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.20630320939813,4.631452032441016] //mapbox longitud/latitud - google maps / latitud- longitud 
      ,zoom: 15
      });
  }

  

}
