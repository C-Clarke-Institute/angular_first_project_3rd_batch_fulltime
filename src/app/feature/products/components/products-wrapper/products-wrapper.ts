import { Component, computed, effect, inject, Inject, OnInit, signal } from '@angular/core';
import { ProductDto } from '../../models/product.model';
import { Product } from '../product/product';
import { productsList } from '../../utils/products-list';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../cart/services/cart-service';

@Component({
  selector: 'app-products-wrapper',
  imports: [Product, FormsModule],
  templateUrl: './products-wrapper.html',
  styleUrl: './products-wrapper.scss',
})
export class ProductsWrapper implements OnInit {

  cartService = inject(CartService)

  constructor() {
    effect(() => {
      console.log('Products Wrapper');
    });
  }
  ngOnInit() {

  }

  products: ProductDto[] = productsList;
  discountPercentage = signal(10);
  cartProducts = signal<ProductDto[]>([]);

  counter = 0;
  count = signal(0);
  totalPrice = signal(0);
  discountPrice = computed(() => {
    console.log('Inside discount price');
    return this.totalPrice() - (this.totalPrice() * this.discountPercentage()) / 100;
  });

  showProduct = false;
  toggleProduct = signal(false);

  public toggleProducts() {
    this.showProduct = !this.showProduct;
    this.discountPrice();
  }

  public onAddToCartProduct(product: ProductDto) {
    this.cartProducts.update((value) => [...value, product]);

    // set new value
    // this.counter = this.cartProducts.length;
    // this.count.set( this.cartProducts.length );

    // update value
    this.counter += 1;
    this.count.update((value) => value + 1);
    this.totalPrice.update((value) => value + product.price);
    this.cartService.increment();
  }

  public getDiscountAmount() {
    console.log('getDiscountAmount()');
    return (this.totalPrice() * this.discountPercentage()) / 100;
  }
}
