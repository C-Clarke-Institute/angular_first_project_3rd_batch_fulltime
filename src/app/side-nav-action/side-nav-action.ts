import { Component, Input, input, model, output } from '@angular/core';

@Component({
  selector: 'app-side-nav-action',
  imports: [],
  templateUrl: './side-nav-action.html',
  styleUrl: './side-nav-action.scss',
})
export class SideNavAction {

  title = input('Home');

  navClick = output<any>();

  action = model('');

  onNavClick(): void {
    this.navClick.emit(this.title() );
    this.action.update( value => value = this.title());
  }
}

