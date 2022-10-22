import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { ORDERS } from '../mock-orders';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  orders = ORDERS;
  selectedOrder?: Order;

  ngOnInit(): void {
  }

  
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
