import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCard } from '../../../shared/components/feature-card/feature-card';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCard],
  templateUrl: './features-section.html',
  styleUrls: ['./features-section.css'],
})
export class FeaturesSection {
  features = [
    {
      icon: 'local_shipping',
      title: 'Free Delivery',
      description: 'On orders over ₹499',
    },
    {
      icon: 'security',
      title: 'Secure Payment',
      description: '100% secure transactions',
    },
    {
      icon: 'autorenew',
      title: 'Easy Returns',
      description: '7-day return policy',
    },
    {
      icon: 'verified',
      title: '100% Authentic',
      description: 'Genuine products',
    },
  ];
}
