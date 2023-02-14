import { Component, Input } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public productList: any;
  constructor(private apiService: ApiServiceService) {
    apiService.getProducts().subscribe((productsData) => {
      console.log(productsData);
      this.productList = productsData;
    });
  }
}
