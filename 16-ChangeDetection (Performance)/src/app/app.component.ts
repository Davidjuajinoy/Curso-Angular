import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;

  title = 'Día 12 del reto';
  url = 'https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg';

  addNewCity(city: string): void {
    this.cities.push(city);
  }
  onCityClicked(city: string): void {
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  onSearch(): void {
    console.log('OnSearch');

  }

  /* //!change Detection
      *change detection es el mecanismo que usa angular para detectar que cosas cambiaron y asi renderizar de nuevo.
      * Existen 2 maneras la default y la push
      * el change detection funciona como un arbol en el que tiene varios procesos  y ese arbol tiene un orden de ejecucion por ejemplo (1 appComponent, 2 formComponent, etc) dependiendo de como se llamen los componentes. Si se deja en la opcion default cada vez que cambie algo en algun componente se va a volver a ejecutar ese arbol, pero en push solo se va a ejecutar el componente que se le asigne push.
      TODO 
      Para asignar push se debe agregar en las propiedades del decorador component changeDetection: ChangeDetectionStrategy.OnPush
          @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
          })
      * 
  */

}
