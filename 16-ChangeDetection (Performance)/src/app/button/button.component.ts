import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button class="btn btn-primary" >{{label}}</button>
  <p>counter: {{counterRender()}}</p> `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label !: string;
  counterRender(): boolean {
    console.log('Render Button',);
    return true;
  }

}
