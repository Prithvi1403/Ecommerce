import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cart, CartItem } from '../../../core/services/cart';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout-page.html',
  styleUrls: ['./checkout-page.css'],
})
export class CheckoutPage implements OnInit {
  name = '';
  email = '';
  phone = '';
  address = '';
  paymentMethod = 'COD';

  cartItems: CartItem[] = [];
  total = 0;

  constructor(
    private cartService: Cart,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();

    if (this.cartItems.length === 0) {
      this.router.navigate(['/cart']);
    }
  }

  placeOrder(): void {
    if (!this.name || !this.email || !this.phone || !this.address) {
      alert('Please fill all delivery details.');
      return;
    }

    console.log({
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
      paymentMethod: this.paymentMethod,
      items: this.cartItems,
      total: this.total,
    });

    this.cartService.clearCart();
    alert('Order placed successfully!');
    this.router.navigate(['/orders']);
  }
}
