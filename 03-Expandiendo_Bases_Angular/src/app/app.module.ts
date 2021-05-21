import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroeModulo } from './Heroes/heroe.module';
import { ContadorModule } from './Contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


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
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
