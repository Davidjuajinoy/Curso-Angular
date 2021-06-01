import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{
  
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //cuando se deja de escribir que se pongan sugerencias

  @Input() placeholder:string = '';

  //subject es un observable
  debouncer: Subject<string> = new Subject();
  
  termino:string = '';
  
  //se dispara una unica vez cuando el componente es inicializado
  ngOnInit(): void {
    this.debouncer
    .pipe(
      //?para esperar 300milisegundos y que se ejecute y no se este ejecutando constantemente
      debounceTime(200)
    )
    .subscribe(valor => {
      // console.log(`debouncer ${valor}`)
      this.onDebounce.emit(valor); //envio el valor a eventemmiter
    })
  }



  buscar()
  {
    this.onEnter.emit(this.termino);
    
  }


  teclaPresionada( event: any)
  {
      //no hay necesidad del evento pero es un ejemplo ya que this.termino es el mismo valor
      const valor = event.target.value;
      // console.log(valor) == console.log(this.termino); 

      this.debouncer.next(this.termino);
  }
}
