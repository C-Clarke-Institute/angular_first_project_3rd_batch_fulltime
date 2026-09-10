import { Component, signal } from '@angular/core';
import { ProductDto } from '../../models/product.model';
import { Product } from '../product/product';
import { productsList } from '../../utils/products-list';

@Component({
  selector: 'app-products-wrapper',
  imports: [Product],
  templateUrl: './products-wrapper.html',
  styleUrl: './products-wrapper.scss',
})
export class ProductsWrapper {
  products: ProductDto[] = productsList;

  cartProducts: ProductDto[] = [];

  counter = 0;
  count = signal(0);


  public onAddToCartProduct(product: ProductDto) {
    this.cartProducts.push(product);

    // set new value
    // this.counter = this.cartProducts.length;
    // this.count.set( this.cartProducts.length );

    // update value
    this.counter += 1;
    this.count.update( value => value + 1);
  }
}
