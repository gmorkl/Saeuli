import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient) { }

    private itemsUrl = 'http://localhost:5000/api/items'; 

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
  }

}
