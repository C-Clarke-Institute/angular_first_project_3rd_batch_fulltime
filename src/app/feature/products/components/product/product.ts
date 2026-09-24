import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
export class Product implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() product!: ProductDto;
  @Input() productCount!: number;

  @Output() onAddToCart = new EventEmitter();

  constructor() {
    console.log("On Constructor Product");
  }

  ngAfterViewInit(): void {
    console.log("On After View Product");
  }

  ngOnDestroy(): void {
    console.log("On Destroy Product");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes Product");
    console.log(changes);
  }

  ngOnInit(): void {
   console.log("On Initial Product");
  }





  public onAddToCartProduct() {
    this.onAddToCart.emit(this.product);
  }
}
