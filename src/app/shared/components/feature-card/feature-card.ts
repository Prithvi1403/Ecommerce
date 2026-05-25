import { Component, Input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-card',
  standalone: true,

  imports: [
    MatIconModule
  ],

  templateUrl: './feature-card.html',
  styleUrls: ['./feature-card.css']
})
export class FeatureCard {

  @Input() icon!: string;

  @Input() title!: string;

  @Input() description!: string;

}