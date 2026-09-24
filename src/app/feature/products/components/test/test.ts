import { Component, inject } from '@angular/core';
import { Counter } from '../../../../services/counter';
import { CounterComponent } from '../../../../services/counter-component';

@Component({
  selector: 'app-test',
  imports: [],
  providers: [CounterComponent],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {

  counterService = inject(Counter);
  counterComponentService = inject(CounterComponent);

  public countIncrement() {
    this.counterService.increment();
    this.counterComponentService.increment();
  }
}
