import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnInit {

  //! se relacion al html con el * 

  @Input() set appCustomIf (condicion: boolean)
  {
    if (condicion) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  } 

  constructor(
    private templateRef:TemplateRef<HTMLElement>,
    private viewContainer:ViewContainerRef
    ) { }
  ngOnInit(): void {
    console.log(this.templateRef);
    console.log(this.viewContainer);
    
  }

}
