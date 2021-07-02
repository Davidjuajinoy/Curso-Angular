import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
  
  
  miFormulario:FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    // agregar: [ , [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      [ 'Call of duty' ,Validators.required],  //FormControl
      [ 'Sims 4', Validators.required]

    ]
      , [Validators.required,Validators.min(1)])
  });


  nuevoFavorito : FormControl = this.fb.control('',Validators.required);
  
  public get Favoritos() : FormArray {
    // return this.miFormulario.controls.favoritos?.controls;}

    // console.log(this.miFormulario.controls.favoritos as FormArray);
    
    return this.miFormulario.get('favoritos')  as FormArray;
  }




  addFavoritos():void{ 
    if(this.nuevoFavorito.invalid) return;
    
    // this.Favoritos.push( new FormControl( this.nuevoFavorito.value, Validators.required));
    this.Favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }


  removeFavoritos(i:number)
  {
    this.Favoritos.removeAt(i)
  }

  
  
  constructor(private fb:FormBuilder)
  {}

  validarCampo(campo:string)
  { 
    return this.miFormulario.controls?.[campo].errors && this.miFormulario.controls?.[campo].touched; 
  }


  guardar()
  {
    if(this.miFormulario.invalid)
    {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
    
    
  }
  
}
