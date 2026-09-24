import { Injectable, signal } from '@angular/core';

@Injectable()
export class CounterComponent {

  private count = signal(0);

  increment() {
    this.count.update( value => value + 1);
  }

  decrement() {
    this.count.update( value => value - 1);
  }

  getCount() {
    return this.count();
  }
}
