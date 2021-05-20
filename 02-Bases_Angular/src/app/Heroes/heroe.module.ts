import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./Heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        //solo van los componentes del modulo heroe
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        //lo que se quiere exportar para instanciar 
        ListadoComponent
    ],
    imports:[
        CommonModule
        //aca solo van modulos ejemplo este archivo
    ]

})

export class HeroeModulo{

}