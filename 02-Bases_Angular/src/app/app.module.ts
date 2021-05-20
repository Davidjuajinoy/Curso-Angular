import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroeModulo } from './Heroes/heroe.module';
import { ContadorModule } from './Contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent, //?agregar contador
    //!para agregar componentes
    // HeroeComponent, ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroeModulo,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
