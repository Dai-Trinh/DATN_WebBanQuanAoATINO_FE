import { Component } from '@angular/core';
import { MessageService } from '../../../../services/message.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent {

  constructor(
    private _messageService: MessageService,
    private _router: Router,
    private _translateService: TranslateService,
    private _productService: AdminService

  ) {
    this._translateService
      .get('notification.valid_action') // <- lấy theo key nào (Ex: 'notification.valid_action', ...)
      .subscribe((item) => (this.validAction = item)); // <- lấy dữ liệu từ file JSON ngôn ngữ
  }

  title: string = "Cập nhật sản phẩm"
  total: number = 10
  validAction: string = ""
  countSort = 0;
  sortOrder: string = 'DESC';
  sortProperty: string = 'updatedAt';
  filter: any = {
    updatedAtSearch: [],
    shopName: "",
    address: "",
    phoneNumber: ""
  };
  action: string = "";
  spin: boolean = false;
  dataInformation: any = {
    parentId: 0
  }

  id = -1;

  titleModal: string = "";
  visibleModalDelete: boolean = false;

  // TODO: selector app-pagination
  page: number = 1;
  perPage: number = 10;

  lstData: any[] = [];
  listSize: any[] = [];
  listColor: any[] = [];
  listOfSelectedValueColor: any[] = [];
  listOfSelectedValueSize: any[] = [];



  columns: any[] = [
   
    {
      title: 'Tên sản phẩm',
      key: 'productName',
      width: '200px',
      visible: true,
      sortOrder: '',
      isRequired: true
    },
    {
      title: 'Ảnh',
      key: 'avatar',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Giá bán',
      key: 'price',
      width: '200px',
      visible: true,
      sortOrder: '',
      isRequired: true
    },
    {
      title: 'Giảm giá',
      key: 'sales',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Size',
      key: 'productSize',
      width: '200px',
      visible: true,
      sortOrder: '',
      isRequired: true
    },
    {
      title: 'Màu sắc',
      key: 'productColor',
      width: '200px',
      visible: true,
      sortOrder: '',
      isRequired: true
    },
    {
      title: 'Kiểu dáng',
      key: 'productForm',
      width: '200px',
      visible: true,
      sortOrder: '',

    },
    {
      title: 'Chất liệu',
      key: 'phoneNumber',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Thiết kế',
      key: 'description',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Thời gian cập nhật',
      key: 'updatedAt',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    
  ];

  ngOnInit(){
    this.getListColor();
    this.getListSize()
  }

  async getListColor(){
    let dataRequestColor = {
      pageNumber: 0,
      pageSize: 0,
      filter: {

      }
    }
    await this._productService.getListColor(dataRequestColor).then((res) => {
      if(res.result.responseCode == '00'){
        this.listColor = res.data;
        console.log(this.listColor)
      }
    })
  }

  async getListSize(){
    let dataRequestSize = {
      pageNumber: 0,
      pageSize: 0,
      filter: {

      }
    }
    await this._productService.getListSize(dataRequestSize).then((res) => {
      if(res.result.responseCode == '00'){
        this.listSize = res.data;
      }
    })
  }


}
