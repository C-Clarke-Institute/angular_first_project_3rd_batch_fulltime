import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDto } from '../../models/product.model';
import { Highlight } from '../../../../directives/highlight';
import { CurrencyPipe, DatePipe, NgClass, NgStyle } from '@angular/common';
import { TruncatePipe } from '../../../../pipes/truncate-pipe';

@Component({
  selector: 'app-product',
  imports: [Highlight, NgClass, NgStyle, DatePipe, TruncatePipe, CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  @Input() product!: ProductDto;

  @Output() onAddToCart = new EventEmitter();

  constructor() {
  }

  public onAddToCartProduct() {
    this.onAddToCart.emit( this.product );
  }

}
