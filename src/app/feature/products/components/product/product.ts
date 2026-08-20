import { Component, Input } from '@angular/core';
import { ProductDto } from '../../models/product.model';
import { Highlight } from '../../../../directives/highlight';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [Highlight, NgClass, NgStyle, DatePipe],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  @Input() product!: ProductDto;

}
