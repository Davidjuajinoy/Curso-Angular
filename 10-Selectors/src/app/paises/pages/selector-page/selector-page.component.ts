import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Region } from '../../interfaces/region';
import { switchMap, tap } from "rxjs/operators";
import { Frontera } from '../../interfaces/frontera';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: []
})
export class SelectorPageComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    continente: [ '' , [Validators.required ,Validators.minLength(1)] ],
    pais: [ '' , [Validators.required ,Validators.minLength(1)] ],
    frontera: [ '' , [Validators.required ,Validators.minLength(1)] ]
  })

  //llenar selectores
  continentes: string[] = [];
  paises:Region[] | [] = [];
  fronteras: Region[] = [];
  cargando: boolean = false;

  validarCampo(campo : string): boolean | undefined
  {     
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  
  constructor(
    private fb:FormBuilder,
    private paisesService:PaisesService
    ) { }
    
  ngOnInit(): void {
    this.continentes = this.paisesService.regiones;
    
    // //when change Region
    // this.miFormulario.get('continente')?.valueChanges
    // .subscribe( reg => {
    //   this.miFormulario.get('pais')?.reset('');
    //   this.cargando= true;

    //   this.paisesService.getpaisesPorRegion(reg)
    //   .subscribe(resp => {
    //     this.paises=resp || [];
    //     this.cargando=false;
    //   });
    // })

      // when change Region
    this.miFormulario.get('continente')?.valueChanges
    .pipe(
      tap( () => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando= true;  // loading
      }),
      switchMap(reg => this.paisesService.getpaisesPorRegion(reg))
    )
    .subscribe( paises => {
      //RESULTADO DE LA PETICION DE ARRIBA
      this.paises=paises || [];
      this.cargando=false;
    })


    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( () => {
        this.fronteras=[];
        this.miFormulario.get('frontera')?.reset('')
        this.cargando=true;
      }),
      switchMap( paisAlphaCode => this.paisesService.getFronteraPorPais(paisAlphaCode)),
      //RESULTADO DE LA PETICION DE ARRIBA
      switchMap( fronterasCode => this.paisesService.getPaisesPorAlphaCode(fronterasCode?.borders!))
    )
    .subscribe( fronteras => {
      // RESULTADO DE EL 2 switchMap
      // this.fronteras = fronteras?.borders || [];
      this.fronteras = fronteras;
      this.cargando=false;
    })

  

 
  }

  guardarContinente(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }  
    console.log('Continente');

  }


}
