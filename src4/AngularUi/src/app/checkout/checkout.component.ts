import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Item } from '../item';
import { OrderService } from '../order.service';
import { ItemService } from '../item.service';
import { PiggyService } from '../piggy.service';
import { DonationResponse } from '../donationResponse';
import { FundingResponse } from '../fundingResponse';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService: OrderService, private itemService: ItemService, private piggyService: PiggyService) { }

  orders: Order[] = [];
  items: Item[] = [];
  selectedOrder?: Order;
  sum: number = 0.0;
  donated?:DonationResponse;
  received?:FundingResponse;

  ngOnInit(): void {
    this.getOrders();
    this.getItems();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.sum=items.reduce((sum, current) => sum + current.total, 0);
    });
  }
  
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

  donate(): void {
    // donate
    this.piggyService.donate().subscribe(donated => this.donated = donated);
  }

  receive(): void {
    // receive
    this.piggyService.receive().subscribe(received => this.received = received);
  }

}
