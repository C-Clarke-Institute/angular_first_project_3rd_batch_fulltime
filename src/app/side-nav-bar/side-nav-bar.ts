import { Component, inject } from '@angular/core';
import { SideNavAction } from '../side-nav-action/side-nav-action';
import { CartService } from '../feature/cart/services/cart-service';
import { Counter } from '../services/counter';
import { CounterComponent } from '../services/counter-component';

@Component({
  selector: 'app-side-nav-bar',
  imports: [SideNavAction],
  providers: [CounterComponent],
  templateUrl: './side-nav-bar.html',
  styleUrl: './side-nav-bar.scss',
})
export class SideNavBar {

  action = 'click';

  counterService = inject(Counter);
  counterComponentService = inject(CounterComponent);


  onNavClick( title: any ) {
    alert( title)
  }

  public countIncrement() {
    this.counterService.increment();
    this.counterComponentService.increment();
  }

}
