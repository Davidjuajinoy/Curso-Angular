import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';


//cambiar el locale de la app 
import localeEs  from "@angular/common/locales/es-CO";
import localeFr  from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
//registra el locale 
registerLocaleData(localeEs);
registerLocaleData(localeFr);

// console.log(localeEs); Es una array con varias cosas del pais (dias de la semana, $ , am-pm, etc) dependiendo del pais que se extraiga


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      //se asigna el valor
      provide: LOCALE_ID, 
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
