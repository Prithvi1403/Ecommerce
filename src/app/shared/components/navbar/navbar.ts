import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SearchBar } from '../search-bar/search-bar';
import { Cart } from '../../../core/services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, SearchBar, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  constructor(readonly cartService: Cart) {}
}
