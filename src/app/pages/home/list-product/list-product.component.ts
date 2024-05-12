import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.dataItem.length; i++) {
      this.cartProductClass[i] = 'shopping-cart shopping-cart-none';
    }
  }

  cartProductClass: string[] = [];

  dataItem: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  current: number = 1;

  shoppingCartHover($event: MouseEvent, index: any) {
    for (let i = 0; i < this.dataItem.length; i++) {
      this.cartProductClass[i] = 'shopping-cart shopping-cart-none';
    }
    this.cartProductClass[index] = 'shopping-cart shopping-cart-flex';
  }
}
