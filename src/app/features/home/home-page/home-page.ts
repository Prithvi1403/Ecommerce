import { Component } from '@angular/core';
import { HeroSection } from '../hero-section/hero-section';
import { FeaturesSection } from '../features-section/features-section';
import { CategorySection } from '../category-section/category-section';
import { ProductsSection } from '../products-section/products-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSection,
    FeaturesSection,
    CategorySection,
    ProductsSection,
  ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {}
