import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements 
OnInit,
OnChanges,
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit,
AfterViewChecked,
OnDestroy 
{
  nombre:string = "David";
  segundos:number = 0;
  timerSuscription!:Subscription;
  constructor(//inyecciones de dependencias
  ){
    console.log('Constructor');
   }
   
   //hooks ejecutar algo cuando sucede algo en el componente
  ngOnInit(): void {
    //peticiones http , modificar propiedades ,etc 
    console.log('On init');
    this.timerSuscription = interval(1000).subscribe(i => {
      this.segundos=i;
    })
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    
  }
  

  ngDoCheck(): void {
    console.log('ngDoCheck');
    
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(): void {
    //se ejecuta cuando se quita la instancia
    console.log('ngOnDestroy');
    this.timerSuscription.unsubscribe();
  }

  guardar(){
    console.log('Guardar');
    
  }

 


}
