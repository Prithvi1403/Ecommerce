import { Injectable, computed, signal } from '@angular/core';

export interface CartProduct {
  image: string;
  title: string;
  price: number;
  rating: number;
}

export interface CartItem extends CartProduct {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private readonly items = signal<CartItem[]>([]);

  readonly cartItems = this.items.asReadonly();

  readonly cartCount = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0),
  );

  addToCart(product: CartProduct, quantity = 1): void {
    const updated = [...this.items()];
    const existing = updated.find((item) => item.title === product.title);

    if (existing) {
      existing.quantity += quantity;
    } else {
      updated.push({ ...product, quantity });
    }

    this.items.set(updated);
  }

  getCartItems(): CartItem[] {
    return this.items();
  }

  getTotal(): number {
    return this.items().reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  removeItem(title: string): void {
    this.items.set(this.items().filter((item) => item.title !== title));
  }

  clearCart(): void {
    this.items.set([]);
  }
}
