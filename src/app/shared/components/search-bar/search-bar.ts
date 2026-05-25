import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Search } from '../../../core/services/search';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'],
})
export class SearchBar implements OnInit {
  searchText = '';

  constructor(
    private searchService: Search,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.syncFromUrl();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.syncFromUrl());
  }

  onSearch(): void {
    const term = this.searchText.trim();
    this.searchService.setSearchTerm(term);

    this.router.navigate(['/products'], {
      queryParams: term ? { search: term } : {},
    });
  }

  private syncFromUrl(): void {
    const search = this.router.parseUrl(this.router.url).queryParams['search'];

    if (search !== undefined) {
      this.searchText = search;
      this.searchService.setSearchTerm(search);
      return;
    }

    const saved = this.searchService.getSearchTerm();
    if (saved) {
      this.searchText = saved;
    }
  }
}
