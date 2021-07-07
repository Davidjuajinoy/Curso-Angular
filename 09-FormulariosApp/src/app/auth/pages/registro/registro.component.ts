import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStriker } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/services/validator.service';
import { EmailValidatorService } from '../../../shared/validators/services/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {
  

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validaciones.nombreApellidoPattern)]],

    email: ['', [Validators.required,Validators.minLength(1), Validators.pattern(emailPattern)], [this.emailValidator] ],
    username: ['', [Validators.required,Validators.minLength(1),this.validaciones.noPuedeSerStriker]],
    password: ['', [Validators.required,Validators.minLength(1)]],
    confirmar: ['', [Validators.required,Validators.minLength(1)]]
  },
  {
     validators: [ this.validaciones.campoIguales('password','confirmar') ]
  })

  constructor(
    private fb:FormBuilder,
    private validaciones:ValidatorService,
    private emailValidator:EmailValidatorService
    ) { }

  
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'David Hernandez',
      email: 'davidjuajinoy@gmail.com',
      username: 'David22',
      password: '12345',
      confirmar: '12345'
    })
  }

  validarCampo(campo:string) :boolean | undefined
  {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  guardar()
  {
    if(this.miFormulario.invalid)
    {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
  }



}
