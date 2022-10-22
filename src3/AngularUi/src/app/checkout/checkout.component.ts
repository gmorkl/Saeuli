import { Component, OnInit } from '@angular/core';
import { Order } from '../order';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  public test = "asdf";

  order: Order = {
    id: 123,  
    cost: 9.50
  };

  ngOnInit(): void {
  }

}
