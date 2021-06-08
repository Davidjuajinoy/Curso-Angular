import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrimengModule } from '../prime-ng/primeng.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedModule { }
