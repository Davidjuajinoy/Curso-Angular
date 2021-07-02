import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [true,Validators.required],
    condiciones: [false,Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }
  
  constructor(private fb:FormBuilder)
  {}


  ngOnInit(): void {
    this.miFormulario.reset(this.persona);



    this.miFormulario.valueChanges.subscribe( ({condiciones,...form}) =>{
      this.persona = form;
    }
    );
  }


  guardar()
  {
    const {condiciones,...form} = this.miFormulario.value;

    this.persona = form;

    
  }
 



}
