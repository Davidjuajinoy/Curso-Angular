import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        'icon': 'pi pi-desktop',
        items:[
          {
            label:'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label:'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label:'no-comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          },
        ]
      },
      {
        label:'Pipes Personalizados',
        icon:'pi pi-cog',
        routerLink: 'ordenar'
      }
        
    ];
  }

}
