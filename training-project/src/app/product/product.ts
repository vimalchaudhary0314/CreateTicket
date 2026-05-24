import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  productData: {
    name: string;
    brand: string;
    price: string;
  }[] | undefined;
  constructor(private productService: ProductService) {
  }
  ngOnInit(): undefined {
    throw new Error('Method not implemented.');
  }
  getProductData() {
    this.productData = this.productService.getProductData();
    console.log(this.productData);
  }
}
