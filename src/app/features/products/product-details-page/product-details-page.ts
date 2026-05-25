import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Cart } from '../../../core/services/cart';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './product-details-page.html',
  styleUrls: ['./product-details-page.css'],
})
export class ProductDetailsPage {
  quantity = 1;

  product = {
    image: 'assets/products/watch-gold-type-photo.jpg',
    title: 'Premium Gold Edition Watch',
    price: 9999,
    rating: 4.9,
  };

  constructor(
    private cartService: Cart,
    private router: Router,
  ) {}

  addToCart(): void {
    this.cartService.addToCart(this.product, this.quantity);
    this.router.navigate(['/cart']);
  }

  buyNow(): void {
    this.cartService.addToCart(this.product, this.quantity);
    this.router.navigate(['/checkout']);
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
