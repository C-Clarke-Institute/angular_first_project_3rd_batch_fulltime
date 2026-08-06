import { Component } from '@angular/core';
import { SideNavAction } from '../side-nav-action/side-nav-action';

@Component({
  selector: 'app-side-nav-bar',
  imports: [SideNavAction],
  templateUrl: './side-nav-bar.html',
  styleUrl: './side-nav-bar.scss',
})
export class SideNavBar {

  action = 'click';


  onNavClick( title: any ) {
    alert( title)
  }

}
