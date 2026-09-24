import { Component, inject } from '@angular/core';
import { CartService } from '../feature/cart/services/cart-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  cartService = inject(CartService)
}
