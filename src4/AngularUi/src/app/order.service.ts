import { Injectable } from '@angular/core';
import { Order } from './order';
import { ORDERS } from './mock-orders';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient) { }

    private ordersUrl = 'http://localhost:5000/api/orders'; 

    /*
  getOrders(): Observable<Order[]> {
    const orders = of(ORDERS);
    return orders;
  }
  */

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl)
  }

}
