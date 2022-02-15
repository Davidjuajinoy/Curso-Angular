import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';

const routes :Routes = [
  {
    //rutas hijas llamadas desde auth/app-routing.module.tes
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( module => module.AuthModule)
    
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canLoad :[ AuthGuard ], //para usar la proteccion de rutas de guard
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component : ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'auth'
  }
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
