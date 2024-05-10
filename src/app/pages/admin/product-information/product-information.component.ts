import { Component } from '@angular/core';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { MessageService } from '../../../services/message.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrl: './product-information.component.css'
})
export class ProductInformationComponent {

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

  title: string = "Danh sách sản phẩm"
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


  columns: any[] = [
   
    {
      title: 'Tên sản phẩm',
      key: 'productName',
      width: '200px',
      visible: true,
      sortOrder: '',
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
    },
    {
      title: 'Số lượng còn',
      key: 'quantity',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Số lượng đã bán',
      key: 'totalQuantitySales',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Số lượng nhập',
      key: 'totalQuantityImported',
      width: '200px',
      visible: true,
      sortOrder: '',
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
      key: 'phoneNumber',
      width: '200px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Màu sắc',
      key: 'productColor',
      width: '200px',
      visible: true,
      sortOrder: '',
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
    
  }

  onHandlePagination(event: any) {}

  handleClickButton(){
    this._router.navigate(['./admin/product/information/create'])
  }

  onHandleChangeColumn($event: any) {
    this.columns = [...$event];
    // localStorage.setItem('columnShipBunkering', JSON.stringify(this.columns));
  }

  
  onResize({ width }: NzResizeEvent, i: number): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.columns[i].width = width + 'px';
    });
  }

  handleSort(column: any, event: any) {
    this.columns.forEach((element) => {
      element.sortOrder = '';
    });
    column.sortOrder = event;
    this.sortOrder = event;
    this.sortProperty = column.key;
  }

  handleFilterFollowStatus(status: any) {
    this.filter.status = status;
    if (this.filter.status) {
      // Gọi API
    }
  }

  onHandleFilter(event: any, column: any) {
    this.filter[column.key] = event;
    console.log(event);
  }

  onHandleClearFilter(column: any) {
    this.filter[column.key] = {
      value: null,
      operator: 0,
    };
    console.log(this.filter);
    // Gọi API
  }

  // TODO  selectors: app-modal-content
  visibleModal: boolean = false;
  openModalConfirm() {
    this.visibleModal = true;
  }

  handleConfirm() {
    if(this.action == 'create'){
      
    } else if(this.action == 'update'){
      
    }
  }

  // TODO: selector: app-breadscrumb
  breadcrumbs: any = [
    {
      name: 'Home',
      route: ``,
    },
    {
      name: 'Room',
      route: ``,
    },
    {
      name: 'Bed',
      route: ``,
    },
  ];

  handleUpdate(row: any){
    this.action = "update";
    this.visibleModal = true;
    this.titleModal = "Cập nhật cửa hàng"
    this.dataInformation = {
      id: row.id,
      shopName: row.shopName,
      address: row.address,
      phoneNumber: row.phoneNumber
    }

  }

  handleRead(row: any){
    this.action = 'read';
    this.visibleModal = true;
    this.titleModal = "Xem chi tiết cửa hàng"
    this.dataInformation = {
      id: row.id,
      shopName: row.shopName,
      address: row.address,
      phoneNumber: row.phoneNumber
    }
  }
  
  handleDelete(row: any){
    this.dataInformation.id = row.id;
    this.visibleModalDelete = true;
  }

  onHandleCancel(){
    this.visibleModal = false;
  }

  handleConfirmDelete(){
    
  }

}
