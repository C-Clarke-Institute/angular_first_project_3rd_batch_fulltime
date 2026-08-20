import { ProductDto } from '../models/product.model';

export const productsList: ProductDto[] = [
  {
    id: 1,
    name: "Ear Phone",
    description: "Test",
    price: 120.00,
    stock : 5,
    createdOn: new Date('2026-06-10T10:00:00.000Z'),
  },
  {
    id: 2,
    name: "Mobile Phone",
    description: "Mobile Phone Description",
    price: 200.00,
    stock : 3,
    createdOn: new Date()
  },
  {
    id: 3,
    name: "Laptop",
    description: "Laptop Description",
    price: 450.00,
    stock : 0,
    createdOn: new Date()
  }
]
