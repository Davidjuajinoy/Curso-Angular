import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';



const routes:Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component:PorRegionComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'pais/:id', //para pasar parametros
        component: VerPaisComponent
    },
    {
        //para por defecto si no encuentra la ruta (404)
        path: '**',
        redirectTo: '' //aca se define la ruta que redirijimos
    }
]

@NgModule({
    imports:[
        //se debe especificar si son rutas hijas o principales
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}