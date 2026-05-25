import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-page',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './orders-page.html',

  styleUrls: ['./orders-page.css']
})

export class OrdersPage {

  orders = [

    {
      id: 1023,
      product: 'Premium Gold Edition Watch',
      amount: 9999,
      status: 'Delivered'
    },

    {
      id: 1024,
      product: 'Luxury Leather Bag',
      amount: 4999,
      status: 'Processing'
    },

    {
      id: 1025,
      product: 'Designer Shoes',
      amount: 5999,
      status: 'Shipped'
    }

  ];

}