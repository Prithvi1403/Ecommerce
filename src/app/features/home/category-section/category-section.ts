import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-section.html',
  styleUrls: ['./category-section.css'],
})
export class CategorySection {
  categories = [
    {
      name: 'Electronics',
      image: 'assets/products/watch.webp',
      link: '/products',
    },
    {
      name: 'Fashion',
      image: 'assets/products/bag1.jpg',
      link: '/products',
    },
    {
      name: 'Shoes',
      image: 'assets/products/shoes.jpg',
      link: '/products',
    },
    {
      name: 'Watches',
      image: 'assets/products/watch-gold-type-photo.jpg',
      link: '/products',
    },
    {
      name: 'Bags',
      image: 'assets/products/bag1.jpg',
      link: '/products',
    },
    {
      name: 'Beauty',
      image: 'assets/products/perfume.jpg',
      link: '/products',
    },
    {
      name: 'Accessories',
      image: 'assets/products/watch-gold-type-photo.jpg',
      link: '/products',
    },
    {
      name: 'Home & Living',
      image: 'assets/products/perfume.jpg',
      link: '/products',
    },
  ];
}
