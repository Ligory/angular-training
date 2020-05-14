import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

class Shipping{
  constructor(public type:string,public price:number){}
}

@Injectable()
export class CartService {
items = [];

  constructor(private http: HttpClient) { }

addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

 getShippingPrices() {
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }
  
}

