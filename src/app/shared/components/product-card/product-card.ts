import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../../../core/services/cart';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCard {
  @Input() image!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Input() rating!: number;
  @Input() reviewCount?: number;
  @Input() detailsLink = '/product-details';
  @Input() showAddToCart = true;

  constructor(
    private cartService: Cart,
    private router: Router,
  ) {}

  addToCart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.cartService.addToCart(
      {
        image: this.image,
        title: this.title,
        price: this.price,
        rating: this.rating,
      },
      1,
    );

    this.router.navigate(['/cart']);
  }
}
