import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(){
    console.log("productService");
  }
  getProductData(){
    return[
      {name:'mobile', brand:'samsung', price:'20000'},
      {name:'laptop',brand:'hp',price:'85000'},
      { name:'washing machine',brand:'samsung',price:'7845' }
    ]
  }
}
