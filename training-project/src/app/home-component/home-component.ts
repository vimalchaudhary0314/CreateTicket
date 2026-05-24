import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product';


@Component({
  selector: 'app-home-component',
  standalone : true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  // Data for Interpolation and Property Binding

  constructor(private productService:ProductService){

  }
    productData: any[] = [];
    

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productData = this.productService.getProductData();
  }


  title = 'Angular Training';
  isLoggedIn = false;
  buttonStatus = true;
  
  // Data for *ngFor
  users = ['Vimal', 'Raj', 'Arush','Alok'];
  
  // Data for *ngSwitch
  userRole = 'admin'; 

  // Data for Two-Way Binding
  currentUsername = '';

  // Data for Attribute Directives
  isUrgent = true;
  customColor = 'blue';
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  // Function for Event Binding
  logValue(val: string) {
    console.log(val);
  }
}
