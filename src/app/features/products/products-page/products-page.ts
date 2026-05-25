import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import {
  CatalogProduct,
  ProductCatalog,
} from '../../../core/services/product-catalog';
import { Search } from '../../../core/services/search';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatIconModule,
    ProductCard,
  ],
  templateUrl: './products-page.html',
  styleUrls: ['./products-page.css'],
})
export class ProductsPage implements OnInit {
  readonly categories: string[];
  readonly brands: string[];
  readonly ratingOptions = [
    { label: '4 stars & Up', value: 4 },
    { label: '3 stars & Up', value: 3 },
    { label: '2 stars & Up', value: 2 },
  ];

  allProducts: CatalogProduct[] = [];
  displayedProducts: CatalogProduct[] = [];
  paginatedProducts: CatalogProduct[] = [];

  searchQuery = '';
  selectedCategory = '';
  maxPrice = 50000;
  selectedBrands: Record<string, boolean> = {};
  minRating = 0;
  sortBy = 'featured';
  viewMode: 'grid' | 'list' = 'grid';

  currentPage = 1;
  readonly pageSize = 12;
  readonly totalCatalogCount = 120;

  constructor(
    private catalog: ProductCatalog,
    private searchService: Search,
    private route: ActivatedRoute,
  ) {
    this.categories = this.catalog.categories;
    this.brands = this.catalog.brands;
    this.brands.forEach((brand) => {
      this.selectedBrands[brand] = false;
    });
  }

  ngOnInit(): void {
    this.allProducts = [...this.catalog.products];

    this.route.queryParamMap.subscribe((params) => {
      this.searchQuery = params.get('search') ?? '';
      this.searchService.setSearchTerm(this.searchQuery);
      this.currentPage = 1;
      this.applyFilters();
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory =
      this.selectedCategory === category ? '' : category;
    this.currentPage = 1;
    this.applyFilters();
  }

  onFiltersChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.allProducts];

    if (this.searchQuery.trim()) {
      result = result.filter((p) =>
        this.searchService.matchesText(p.title, this.searchQuery),
      );
    }

    if (this.selectedCategory) {
      result = result.filter((p) => p.category === this.selectedCategory);
    }

    result = result.filter((p) => p.price <= this.maxPrice);

    const activeBrands = this.brands.filter((b) => this.selectedBrands[b]);
    if (activeBrands.length > 0) {
      result = result.filter((p) => activeBrands.includes(p.brand));
    }

    if (this.minRating > 0) {
      result = result.filter((p) => p.rating >= this.minRating);
    }

    result = this.sortProducts(result);
    this.displayedProducts = result;
    this.updatePagination();
  }

  sortProducts(products: CatalogProduct[]): CatalogProduct[] {
    const sorted = [...products];

    switch (this.sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedProducts = this.displayedProducts.slice(
      start,
      start + this.pageSize,
    );
  }

  get showingFrom(): number {
    if (this.displayedProducts.length === 0) {
      return 0;
    }
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get showingTo(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.displayedProducts.length,
    );
  }

  get totalPages(): number {
    return Math.max(
      1,
      Math.ceil(this.displayedProducts.length / this.pageSize),
    );
  }

  get pageNumbers(): number[] {
    const pages = Math.min(5, this.totalPages);
    return Array.from({ length: pages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.updatePagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  isCategoryActive(category: string): boolean {
    return this.selectedCategory === category;
  }
}
