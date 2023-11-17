import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Item } from '../item';
import { OrderService } from '../order.service';
import { ItemService } from '../item.service';
import { PiggyService } from '../piggy.service';
import { DonationResponse } from '../donationResponse';
import { FundingResponse } from '../fundingResponse';
import { Location } from '@angular/common';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService: OrderService, private itemService: ItemService, private piggyService: PiggyService, private location: Location) { }

  orders: Order[] = [];
  items: Item[] = [];
  selectedOrder?: Order;
  sum: number = 0.0;
  donated?:DonationResponse;
  received?:FundingResponse;
  isDonation: Boolean = false;
  total: number = 9.55;
  given: number = 9.03;
  toPay: number = 0.52;
  toDonate: number = 0.0;

  ngOnInit(): void {
    this.getOrders();
    this.getItems();

    this.total = 8 + (Math.round(Math.random()*10.0)*10.0)/100;
    this.given = 8 + (Math.round(Math.random()*10.0)*10.0)/100;
    this.toPay = this.total - this.given;

    if(this.toPay > 0) {
      this.isDonation = false;
    }
    else {
      this.isDonation = true;
    
      this.toDonate = Math.abs(Math.ceil(this.total)-this.total);
      this.given = this.total;
      this.toPay = 0;
    }
  }

  back():void {
    this.location.back();
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
    this.piggyService.donate().subscribe(donated => {this.donated = donated});
  }

  receive(): void {
    // receive
    this.piggyService.receive().subscribe(received => {
      this.received = received;
      this.toPay=0.0;
      
    });
  }

}
