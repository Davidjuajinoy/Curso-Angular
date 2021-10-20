import { AfterViewInit, Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
    `
    .size-map{
      width:100%;
      height:150px;
    }`
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  constructor() { }

  @Input() lngLat: [number,number] = [0,0];
  @ViewChild('mapa') divMapa!: ElementRef;

  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat, //mapbox longitud/latitud - google maps / latitud- longitud 
      zoom: 15,
      interactive:false
      });

    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(mapa);
  }

  

}
