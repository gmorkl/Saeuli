import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Item } from '../item';
import { OrderService } from '../order.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService: OrderService, private itemService: ItemService) { }

  orders: Order[] = [];
  items: Item[] = [];
  selectedOrder?: Order;

  ngOnInit(): void {
    this.getOrders();
    this.getItems();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }
  
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

}
