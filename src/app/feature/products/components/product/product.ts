import { Component, Input } from '@angular/core';
import { ProductDto } from '../../models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  @Input() product!: ProductDto;

}
