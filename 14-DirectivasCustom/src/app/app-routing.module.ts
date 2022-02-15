import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: 'productos', 
      loadChildren: () => import('./productos/producto.module').then(m => m.ProductoModule) 
    },
    {
        path:'**', redirectTo:'productos'
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}