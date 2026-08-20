import { Component, Input, input, model, output } from '@angular/core';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-side-nav-action',
  imports: [
    Highlight
  ],
  templateUrl: './side-nav-action.html',
  styleUrl: './side-nav-action.scss',
})
export class SideNavAction {


  @Input()
  hide = false;

  title = input('Home');

  navClick = output<any>();

  action = model('');

  onNavClick(): void {
    this.navClick.emit(this.title() );
    this.action.update( value => value = this.title());
  }
}

