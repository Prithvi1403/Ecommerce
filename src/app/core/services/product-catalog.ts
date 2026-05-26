import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface CatalogProduct {
  image: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
  brand: string;
  detailsLink: string;
}

interface RemoteProduct {
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductCatalog {
  readonly products: CatalogProduct[] = [
    {
      image: 'assets/products/watch.webp',
      title: 'Apple AirPods Pro',
      price: 18900,
      rating: 4.7,
      reviewCount: 320,
      category: 'Electronics',
      brand: 'Apple',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/watch-gold-type-photo.jpg',
      title: 'Fossil Chronograph Watch',
      price: 12999,
      rating: 4.4,
      reviewCount: 180,
      category: 'Watches',
      brand: 'Fossil',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/shoes.jpg',
      title: 'Nike Air Force 1',
      price: 8999,
      rating: 4.6,
      reviewCount: 540,
      category: 'Shoes',
      brand: 'Nike',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/bag1.jpg',
      title: 'Michael Kors Handbag',
      price: 12499,
      rating: 4.5,
      reviewCount: 210,
      category: 'Bags',
      brand: 'Michael Kors',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/watch.webp',
      title: 'iPhone 15 Pro Max',
      price: 134900,
      rating: 4.8,
      reviewCount: 890,
      category: 'Electronics',
      brand: 'Apple',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/bag1.jpg',
      title: 'Ray-Ban Aviator Sunglasses',
      price: 5999,
      rating: 4.3,
      reviewCount: 410,
      category: 'Accessories',
      brand: 'Ray-Ban',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/watch.webp',
      title: 'Samsung Galaxy S24',
      price: 74999,
      rating: 4.6,
      reviewCount: 620,
      category: 'Electronics',
      brand: 'Samsung',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/shoes.jpg',
      title: 'Adidas Campus 00s',
      price: 7999,
      rating: 4.5,
      reviewCount: 275,
      category: 'Shoes',
      brand: 'Adidas',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/watch-gold-type-photo.jpg',
      title: 'Titan Analog Watch',
      price: 4999,
      rating: 4.2,
      reviewCount: 150,
      category: 'Watches',
      brand: 'Titan',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/bag1.jpg',
      title: 'Leather Crossbody Bag',
      price: 2499,
      rating: 4.5,
      reviewCount: 95,
      category: 'Fashion',
      brand: 'Michael Kors',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/perfume.jpg',
      title: 'Chanel No.5 Perfume',
      price: 7500,
      rating: 4.8,
      reviewCount: 88,
      category: 'Beauty',
      brand: 'Chanel',
      detailsLink: '/product-details',
    },
    {
      image: 'assets/products/shoes.jpg',
      title: 'Nike Air Max 270',
      price: 8999,
      rating: 4.6,
      reviewCount: 430,
      category: 'Shoes',
      brand: 'Nike',
      detailsLink: '/product-details',
    },
  ];

  readonly categories = [
    'Electronics',
    'Fashion',
    'Shoes',
    'Watches',
    'Bags',
    'Beauty',
    'Accessories',
    'Home & Living',
  ];

  readonly brands = [
    'Apple',
    'Nike',
    'Fossil',
    'Michael Kors',
    'Ray-Ban',
    'Samsung',
  ];

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<CatalogProduct[]> {
    const url = 'https://fakestoreapi.com/products?limit=12';

    return this.http.get<RemoteProduct[]>(url).pipe(
      map((items) =>
        items.map((item) => ({
          image: item.image,
          title: item.title,
          price: Math.round(item.price * 100),
          rating: item.rating.rate,
          reviewCount: item.rating.count,
          category: item.category,
          brand: item.title.split(' ')[0] ?? 'Brand',
          detailsLink: '/product-details',
        })),
      ),
    );
  }
}
