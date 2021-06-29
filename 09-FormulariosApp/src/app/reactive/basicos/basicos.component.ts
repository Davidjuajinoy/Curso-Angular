import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })


  //? FormBuilder
  /* 
    Crear formularios mediante sintaxis js
    -Se debe inyectar el servicio
  */

  // nombre: ['pan', [Validators.required], validatorasync ],

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    precio: [  , [Validators.required, Validators.min(0) ]  ],
    existencias: [  ,[Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    //? setValue requiere todos los campos del formulario
    // this.miFormulario.setValue({
    //   nombre:'David',
    //   precio:1,
    //   existencias: 200
    // })
    //? Con el reset se prodria hacer asi
    this.miFormulario.reset({
      nombre:'David',
      precio:1,
    })
  }


  campoEsValido(campo:string)
  {
    return this.miFormulario.controls?.[campo]?.errors && this.miFormulario?.controls?.[campo]?.touched;
  }


  guardar()
  {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }


}
