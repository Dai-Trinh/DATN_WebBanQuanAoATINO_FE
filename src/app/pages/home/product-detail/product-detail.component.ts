import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { UserService } from '../user.service';
import { environment } from '../../../../environment/environment.cloud';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  
  constructor(private _router: Router,
    private _productService: UserService,
    private _activeRouter: ActivatedRoute
  ){}

  id: number = this._activeRouter.snapshot.params['id'];
  urlPreview: string = environment.api_end_point_preview;
  
  quantity = 1;
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  product: any = {};

  arraySize: any[] = [];

  arrayClassSize: string[] = [];

  ngOnInit(): void {
    this.getDetail()
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

  async getDetail(){
    await this._productService.getProductDetail(this.id).then((res) => {
      if(res.result.responseCode == '00'){
        this.product = res.data;
        this.arraySize = res.data.productSize;
      }
    })
  }
}
