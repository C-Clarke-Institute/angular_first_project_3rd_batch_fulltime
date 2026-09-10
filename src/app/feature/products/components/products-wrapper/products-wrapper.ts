import { Component } from '@angular/core';
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


  public onAddToCartProduct(product: ProductDto) {
    this.cartProducts.push(product);
  }
}
