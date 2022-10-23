import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(
    private location: Location) { }

  @Input() order?: Order;

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
