import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta: string,
  nombre:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItem: MenuItem[] = [
    {
      ruta: 'mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      ruta: 'mapas/zoomrange',
      nombre: 'ZoomRange'
    },
    {
      ruta: 'mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: 'mapas/propiedades',
      nombre: 'Propiedades'
    }
  ];

}
