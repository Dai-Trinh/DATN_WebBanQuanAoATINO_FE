import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  
  
  
  quantity = 1;
  array = [1, 2, 3, 4];
  effect = 'scrollx';


  arraySize = [30, 31, 32, 33, 34, 35];

  arrayClassSize: string[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.arraySize.length; i++) {
      this.arrayClassSize[i] = '';
    }
  }

  clickSize(index: any) {
    for (let i = 0; i < this.arraySize.length; i++) {
      this.arrayClassSize[i] = '';
    }
    this.arrayClassSize[index] = 'is-size';
  }

  clickQuantity(operation: any) {
    if (operation === '+') {
      this.quantity++;
    } else if (operation === '-') {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  }
}
