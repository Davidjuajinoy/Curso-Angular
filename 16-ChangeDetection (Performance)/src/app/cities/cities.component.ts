import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: ` 
  <ul>
  <li (click)="onCityClicked(city)"
    [ngClass]="{'alert alert-info': city === selection}">
    {{city}}
  </li>
</ul>
<p>counter: {{ counterRender() }}</p>`,
  styleUrls: ['./cities.component.scss'],
  // se que no tiene q recargarse siempre , porque se esta recargando cuando escribo en el input search
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string): void {
    this.cityClickedEvent.emit(city);
  }

  counterRender(): boolean {
    console.log('Render city',);
    return true;
  }




}
