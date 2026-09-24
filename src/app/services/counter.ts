import { Injectable, signal } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Counter {

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

  numbers$ = new Observable( observable => {

    console.log("counter observable created");
    observable.next( 1);
    observable.next( 2);
    observable.next( 3);
    observable.complete();

  });

  getCounter(): Observable<number> {
    return new Observable( observable => {
       let counter = 0;
       setInterval( () => {
         counter++;
         observable.next(counter);
       }, 2000 );
    })
  }

}
