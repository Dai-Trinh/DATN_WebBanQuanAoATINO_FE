import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../../services/localstorage.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environment/environment.cloud';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  dataInformation: any = {};
  constructor(private _localStorage: LocalStorage,
    private _router: Router,
    private _paymentService: UserService
  ){}

  urlPreview: string = environment.api_end_point_preview;

  listProduct: any[] = [];

  tolal: any = 0;

  billProduct: any[] = [];



  ngOnInit() {
    const data = this._localStorage.getShoppingCart()
    this.listProduct = data ? JSON.parse(data) : [];
    this.totalPrice();
  }

  totalPrice(){
    this.tolal = 0;
    this.listProduct.map((item) => {
      this.tolal += item.price * item.quantity;
    })
  }

  columns: any[] = [
    {
      keyName: 'reciver',
      keyTitle: 'Họ và tên người nhận',
      check: true,
      isRequired: true,
    },
    {
      keyName: 'phoneNumber',
      keyTitle: 'Số điện thoại',
      check: true,
      isRequired: true,
    },
    {
      keyName: 'email',
      keyTitle: 'Email',
      check: true,
      isRequired: false,
    },
    {
      keyName: 'address',
      keyTitle: 'Địa chỉ nhận hàng',
      check: true,
      isRequired: true,
    },
    // {
    //   keyName: 'name',
    //   keyTitle: 'Địa chỉ nhà cụ thể',
    //   check: true,
    //   isRequired: true,
    // },
    {
      keyName: 'billNote',
      keyTitle: 'Lời nhắn',
      check: true,
    },
  ];

  addVoucher() {}

  async payProduct() {
    this.dataInformation.totalPrice = this.tolal;
    this.dataInformation.status = 1;
    this.listProduct.map((item: any) => {
      let data = {
        product: {
          id: item.id
        },
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color,
        //sales: item.sales
      }
      this.billProduct.push(data);
    })
    this.dataInformation.productBill = this.billProduct;
    await this._paymentService.saveBill(this.dataInformation).then((item) => {
      console.log(item)
      if(item.result.responseCode == '00'){
        this.dataInformation = {};
        this._localStorage.removeAllShoppingCart();
      }
    })
    
  }
}
