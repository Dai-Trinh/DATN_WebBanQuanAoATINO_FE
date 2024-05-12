import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  dataInformation: any = {};
  constructor() {}

  ngOnInit() {}

  columns: any[] = [
    {
      keyName: 'name',
      keyTitle: 'Họ và tên người nhận',
      check: true,
      isRequired: true,
    },
    {
      keyName: 'name',
      keyTitle: 'Số điện thoại',
      check: true,
      isRequired: true,
    },
    {
      keyName: 'name',
      keyTitle: 'Tỉnh thành phố, Quận/Huyện',
      check: true,
      isRequired: true,
    },
    {
      keyName: 'name',
      keyTitle: 'Địa chỉ nhà cụ thể',
      check: true,
      isRequired: true,
    },
    {
      keyName: 'note',
      keyTitle: 'Lời nhắn',
      check: true,
    },
  ];

  addVoucher() {}

  payProduct() {}
}
