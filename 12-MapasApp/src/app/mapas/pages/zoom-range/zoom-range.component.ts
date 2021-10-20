import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: []
})
export class ZoomRangeComponent implements AfterViewInit,OnDestroy {

  constructor() { }


  //limpiar eventos (obligatorio si se crean eventos en un ciclo de vida del componente
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  @ViewChild('mapa') divMapa !: ElementRef; //en el ciclo de NgOnit no lo lee porque aun no se ha renderizado el html, por lo cual se usa el after

  zoomLevel:number = 13;

  center: [number,number]=[-74.20630320939813,4.631452032441016];

  //Mapa propiedad 
  mapa!: mapboxgl.Map;

  ngAfterViewInit(): void {
    this.mapa= new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center //mapbox longitud/latitud - google maps / latitud- longitud 
      ,zoom: this.zoomLevel
      });


      this.mapa.on('zoom', (e) => {
        this.zoomLevel = this.mapa.getZoom();
      })
      this.mapa.on('zoomend', (e) => {
        if(this.mapa.getZoom() > 18)
        {
          this.mapa.zoomTo(18);
        }
      })


      this.mapa.on('move',(e)=>{
        const target = e.target.getCenter();
        this.center = [target.lat,target.lng]
      })

   
  }

  zoomOut()
  {
    this.mapa.zoomOut();
    console.log('zoomout'); 
  }

  zoomIn()
  {
    this.mapa.zoomIn();
    console.log('zoomIn');
  }

  zoomRange(valor : string)
  {
    this.mapa.zoomTo(Number(valor)); 
  }

}
