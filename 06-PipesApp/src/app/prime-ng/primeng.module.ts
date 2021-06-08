import { NgModule } from '@angular/core';


// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
//requiere importar las animaciones import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
//toolbar necesita estos 2
import {ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';

//table incluye instalar npm install @angular/cdk --save
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule
  ]
})
export class PrimengModule { }
