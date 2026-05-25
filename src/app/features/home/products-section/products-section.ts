import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [CommonModule, ProductCard, RouterLink],
  templateUrl: './products-section.html',
  styleUrls: ['./products-section.css'],
})
export class ProductsSection {
  products = [
    {
      image: 'assets/products/watch.webp',
      title: 'Apple AirPods Pro',
      price: 18900,
      rating: 4.7,
      reviewCount: 320,
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/bag1.jpg',
      title: 'Leather Crossbody Bag',
      price: 2499,
      rating: 4.5,
      reviewCount: 210,
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/shoes.jpg',
      title: 'Nike Air Max 270',
      price: 8999,
      rating: 4.6,
      reviewCount: 540,
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/watch-gold-type-photo.jpg',
      title: 'Fossil Gen 6 Watch',
      price: 12999,
      rating: 4.4,
      reviewCount: 180,
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/perfume.jpg',
      title: 'Chanel No.5 Perfume',
      price: 7500,
      rating: 4.8,
      reviewCount: 95,
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/bag1.jpg',
      title: 'Ray-Ban Aviator',
      price: 5999,
      rating: 4.3,
      reviewCount: 410,
      detailsLink: '/product-details',
    },
  ];
}
