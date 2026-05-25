import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cart, CartItem } from '../../../core/services/cart';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.css'],
})
export class CartPage implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: Cart) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  removeItem(title: string): void {
    this.cartService.removeItem(title);
    this.loadCart();
  }
}
