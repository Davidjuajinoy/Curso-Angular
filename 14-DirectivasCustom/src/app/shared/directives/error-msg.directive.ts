import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit,OnChanges{    
  //referencia la elemento que se pone la directiva
  htmlElement:ElementRef<HTMLElement>;

  // @Input() color:string = 'red'
  // @Input() msg:string= "Sin mensaje"
  @Input() class:string[] | string= []

  // ! MANERA CORTA
  // para que aparezca sin poner mensaje 
  private _msg :string = "Este campo es requerido";
  private _color: string ="red";
  // input setters
  @Input() set color(valor:string)
  {
    this._color=valor
    this.setColor();
  }

  @Input() set msg(msg:string){
    this._msg=msg;
    this.setMsg();
  }

  @Input() set valido(valor:boolean){
    (valor) ? this.htmlElement.nativeElement.classList.add("d-none") : this.htmlElement.nativeElement.classList.remove("d-none");
  } 

  constructor(private element:ElementRef<HTMLElement>) {
  
    this.htmlElement=element;
   }


  //!  manera larga
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
 
    // if (changes.msg) {
    //   const mensaje:string = changes?.msg?.currentValue;
    //   this.htmlElement.nativeElement.textContent=mensaje;
    // }
    // if (changes.color){
    //   this.color =changes?.color?.currentValue
    //   this.setColor();
    // }
  }

  ngOnInit(): void {
    console.log('ngOnit directiva');

    // console.log(this.color); //undefined
    // console.log(this.msg); //undefined
    
    this.setColor();
    this.setMsg();
    this.setClass();
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color=this._color;
  }

  setMsg():void{
    this.htmlElement.nativeElement.textContent=this._msg;
  }

  setClass():void{
    this.htmlElement.nativeElement.classList.add(...this.class);
  }
  
}
