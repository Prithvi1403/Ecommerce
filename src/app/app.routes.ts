import { Routes } from '@angular/router';
import { MainLayout } from './shared/layouts/main-layout/main-layout';
import { HomePage } from './features/home/home-page/home-page';
import { ProductsPage } from './features/products/products-page/products-page';
import { ProductDetailsPage } from './features/products/product-details-page/product-details-page';
import { CartPage } from './features/cart/cart-page/cart-page';
import { CheckoutPage } from './features/checkout/checkout-page/checkout-page';
import { LoginPage } from './features/auth/login-page/login-page';
import { OrdersPage } from './features/orders/orders-page/orders-page';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'products', component: ProductsPage },
      { path: 'product-details', component: ProductDetailsPage },
      { path: 'cart', component: CartPage },
      { path: 'checkout', component: CheckoutPage },
      { path: 'orders', component: OrdersPage },
    ],
  },
];
