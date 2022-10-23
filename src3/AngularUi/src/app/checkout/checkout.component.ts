import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders: Order[] = [];
  selectedOrder?: Order;

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }
  
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
