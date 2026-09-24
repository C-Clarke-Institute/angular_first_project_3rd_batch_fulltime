import { Injectable, signal } from '@angular/core';
import { ProductDto } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

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
