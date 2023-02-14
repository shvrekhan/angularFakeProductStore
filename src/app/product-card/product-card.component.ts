import { Component, Input } from '@angular/core';
import product from '../services/interfaces';
import { ApiServiceService } from '../services/api-service.service';

import { Router } from '@angular/router';
import { CartService } from '../services/cart-service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  public productList: any;
  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private cartService: CartService
  ) {
    apiService.getProducts().subscribe((productsData) => {
      console.log(productsData);
      this.productList = productsData;
    });
  }
  onSelect(product: product) {
    this.router.navigate(['product', product.id, product]);
  }
  addtocart(product: product) {
    this.cartService.addtoCart(product);
  }
}
