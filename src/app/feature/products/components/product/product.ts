import {
  AfterViewInit,
  Component,
  EventEmitter, inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, signal,
  SimpleChanges
} from '@angular/core';
import { ProductDto } from '../../models/product.model';
import { Highlight } from '../../../../directives/highlight';
import { CurrencyPipe, DatePipe, NgClass, NgStyle } from '@angular/common';
import { TruncatePipe } from '../../../../pipes/truncate-pipe';
import { Counter } from '../../../../services/counter';
import { Subscription } from 'rxjs';

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

  counterService = inject(Counter);
  numbers = signal<number[]>([]);
  counterSubscription!: Subscription;


  constructor() {
    console.log("On Constructor Product");
  }

  ngAfterViewInit(): void {
    console.log("On After View Product");
  }

  ngOnDestroy(): void {
    console.log("On Destroy Product");
    this.counterSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes Product");
    console.log(changes);
  }

  ngOnInit(): void {
   console.log("On Initial Product");
   this.counterSubscription = this.counterService.getCounter().subscribe( count => {
      this.numbers.update( value => [...value, count]);
      console.log(count);
   })
  }





  public onAddToCartProduct() {
    this.onAddToCart.emit(this.product);
  }
}
