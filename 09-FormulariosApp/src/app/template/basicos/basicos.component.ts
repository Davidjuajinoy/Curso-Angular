import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  // guardar(form:NgForm ){
    //   console.log(form);
    
    //   // /acceder a la propiedad precio
    //   console.log(form.controls.precio);
    
    // }
    
    
    
  @ViewChild('miformulario') miFormulario!:NgForm;
  guardar()
  {
    console.log(this.miFormulario);
    console.log('posteo correcto');
    // this.miFormulario.resetForm(); 
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    }); 
    
  }

  initForm ={
    producto: 'pan',
    precio: 200,
    existencias: 10
  }

  nombreValido():boolean
  {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  }

  precioValido():boolean
  {    
    return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio?.value < 0; 
  }
}
