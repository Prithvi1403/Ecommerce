import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Search {
  private readonly term = signal('');

  readonly searchTerm = this.term.asReadonly();

  setSearchTerm(term: string): void {
    this.term.set(term.trim());
  }

  getSearchTerm(): string {
    return this.term();
  }

  matchesText(text: string, term?: string): boolean {
    const query = (term ?? this.term()).trim().toLowerCase();
    if (!query) {
      return true;
    }
    return text.toLowerCase().includes(query);
  }
}
