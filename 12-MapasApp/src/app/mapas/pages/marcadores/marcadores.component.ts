import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor{
  color:string;
  marker?:mapboxgl.Marker;
  centro?: [number,number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .btn-marker{
      z-index: 1500;
      top: 10%
    }
    `
  ]
})
export class MarcadoresComponent implements OnInit,AfterViewInit,OnDestroy {

  constructor() { }
  
  ngOnDestroy(): void {
    this.mapa.off('dragend', () => {});
  }

  ngOnInit(): void {
  }
  
  //Mapa propiedad 
  mapa!: mapboxgl.Map;

  //div
  @ViewChild('mapa') divMapa!: ElementRef;

  center: [number,number]=[-74.20630320939813,4.631452032441016];

  zoomLevel: number =13;

  markers: MarcadorColor[] = [];

  ngAfterViewInit(): void {
    this.mapa= new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center //mapbox longitud/latitud - google maps / latitud- longitud 
      ,zoom: this.zoomLevel
      });


      // // marcador static
      // const maker = new mapboxgl.Marker()
      //   .setLngLat(this.center)
      //   .addTo(this.mapa);


      this.leerMarcadorLocalStorege();
   
  }

  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarker = new mapboxgl.Marker({
      draggable:true,
      color: color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);

    this.markers.push({
      color,
      marker:nuevoMarker
    });

    this.guardarMarcadorLocalStorage();
    
    //guardar posicion de uno nuevo sin necesidad de crear otro
    nuevoMarker.on('dragend', () => {
      console.log('guardar');
      this.guardarMarcadorLocalStorage();
    })
    
  }


  // FlyTo
  // Opcion hecha por mi
 /*  irMarcador(id:number){
    
    const lngLat = this.markers[id]?.marker.getLngLat();
    this.mapa.flyTo({
      center: lngLat
    })
  } */

  irMarcador( marker: mapboxgl.Marker){
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }



  guardarMarcadorLocalStorage(){

    const lngLatArr : MarcadorColor[] = []

    this.markers.forEach(m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color,
        centro: [lng,lat]
      });
    })
    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  leerMarcadorLocalStorege(){
    // si no existen no los lee
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArr : MarcadorColor[] = JSON.parse( localStorage.getItem('marcadores')!);
    // se pone ! para decirle que siempre existira el valor

    // poner marcadores guardados
    lngLatArr.forEach(m => {
       //! Convertir datos json a objeto marker
       const newMarker = new mapboxgl.Marker({
         color:m.color,
         draggable: true
       })
        .setLngLat(m.centro!)
        .addTo(this.mapa);

        //agregar marcadores a array vacio
        this.markers.push({
          color: m.color,
          marker: newMarker
        })
        
        //evento para guardar algun cambio de posicion sin necesidad de crear otro
        newMarker.on('dragend', () => {
          this.guardarMarcadorLocalStorage();
          console.log('leer');
        })
    })

    
  }


  eliminarMarcador(id:number){
    this.markers[id]?.marker?.remove();
    //tambien sirve this.markers= this.markers.filter(m => m.color != this.markers[id].color)
    this.markers.splice(id,1); 
    this.guardarMarcadorLocalStorage();
  }


}
