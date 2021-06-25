import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id :'DC Comics',
      desc : 'DC-Comics' 
    },
    {
      id :'Marvel Comics',
      desc : 'Marvel-Comics' 
    }
  ]

  title:string = 'Agregar Héroe';


  heroe:Heroes ={
    superhero: '',
    alter_ego :'',
    first_appearance: '',
    characters:'',
    publisher: Publisher.DCComics,
    alt_img:''
  }

  constructor(
    private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

    if(this.route.url.includes('editar'))
    {
      this.title='Editar Héroe';
      this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroeById(id))
      ).subscribe(heroe => this.heroe=heroe)
    }
    
  }


  guardar()
  {

    if(this.heroe.id)
    {
      this.heroesService.actualizarHeroe(this.heroe).subscribe(resp => {
        this.mostrarSnackBar('Se Ha Actualizado Correctamente',"Cerrar");
      });
    }else{
      if (this.heroe.superhero.trim().length > 0 && this.heroe.alter_ego.trim().length > 0  ) {
        
        this.heroesService.agregarHeroe(this.heroe).subscribe(resp => {
          this.mostrarSnackBar('Se Ha Creado El Héroe Correctamente',"Cerrar");
          this.route.navigate([`/heroes`,resp.id]);
        });
      } 
      else {
        return;
      }
    }

  }


  eliminar()
  {
    const dialog =this.dialog.open( ConfirmarComponent , {
      // width:'25%',
      // height: '50%',
      data: {...this.heroe}
    });

    dialog.afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.heroesService.EliminarHeroe(this.heroe).subscribe(resp => {
          this.mostrarSnackBar('Se Ha Eliminado Correctamente',"Cerrar");
          this.route.navigate(['/heroes']);
        });
      }
    });

  }


  mostrarSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

}
