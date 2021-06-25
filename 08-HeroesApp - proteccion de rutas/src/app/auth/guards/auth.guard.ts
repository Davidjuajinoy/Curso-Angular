import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate,CanLoad {
  constructor(
    private authService:AuthService,
    private route:Router
    )
  {}
  
  //canActivate
  //bloquea la ruta sin importar si ya hubiera cargado el modulo anteriormente
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.verificaAutentificacion()
      .pipe(
        tap(estaAutenticado =>{
          if (!estaAutenticado) {
            this.route.navigate(['./auth/login']);
          }
        } )
      )
      ;


      // if (this.authService.auth.id) {
      //   return true
      // }

      // console.log('Bloqueado por El CanActivate');
      
      // return false;
  }



  //proteccion de rutas
  // haciendo que no cargue el modulo , pero si ya cargo el modulo anteriormentes puede volver a entrar.
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authService.verificaAutentificacion()
      .pipe(
        tap(estaAutenticado =>{
          // console.log(estaAutenticado);
          if (!estaAutenticado) {
            this.route.navigate(['./auth/login']);
          }
        } )
      );
      // if (this.authService.auth.id) {
      //   return true
      // }
      // console.log('canLoad',true);
      // console.log(route);
      // console.log(segments);
      
      // console.log('Bloqueado por El CanLoad');
      // return false;
  }
}
