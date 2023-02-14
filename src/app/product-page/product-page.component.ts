import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import product from '../services/interfaces';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  public productId: any;
  public product: any;
  public rating: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.rating = this.route.snapshot.paramMap.get('rating');
    this.productId = id;
    console.log(this.route.snapshot.params['category']);
    this.product = this.route.snapshot.params;
    console.log(this.rating);
  }
}
