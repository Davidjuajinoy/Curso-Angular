import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor(private http:HttpClient) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> 
  {
    const emailQ = control.value;
    console.log(emailQ);
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${emailQ}`).pipe(
      map(resp =>{
        return (resp.length === 0) ? null : {emailExist:true}
      })
    );
  }
}
