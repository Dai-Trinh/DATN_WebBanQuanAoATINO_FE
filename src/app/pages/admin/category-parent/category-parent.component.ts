import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import moment from 'moment';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-category-parent',
  templateUrl: './category-parent.component.html',
  styleUrl: './category-parent.component.css',
})
export class CategoryParentComponent {
  constructor(
    private _categoryService: AdminService,
    private _messageService: MessageService
  ) {}
  title: string = 'Danh sách danh mục sản phẩm cha';
  spin: boolean = false;
  page: number = 1;
  perPage: number = 10;
  total: number = 5;
  sortOrder: string = 'DESC';
  sortProperty: string = 'updatedAt';
  filter: any = {
    updatedAtSearch: [],
    categoryName: '',
  };
  lstData: any[] = [
    {
      stt: 1,
      categoryName: 'Áo',
      updatedAt: new Date(),
    },
    {
      stt: 2,
      categoryName: 'Quần',
      updatedAt: new Date(),
    },
  ];
  visibleModal: boolean = false;
  action: string = '';
  titleModal: string = '';
  dataInformation: any = {
    categoryName: null,
  };

  ngOnInit() {}

  async getLstData() {
    let dataRequest = {
      pageNumber: this.page - 1,
      pageSize: this.perPage,
      filter: {
        categoryName: this.filter.categoryName,
        updatedAtSearch:
          this.filter.updatedAtSearch.length > 0
            ? [
                moment(this.filter.updatedAtSearch[0]).format('YYYY-MM-DD'),
                moment(this.filter.updatedAtSearch[1]).format('YYYY-MM-DD'),
              ]
            : [],
      },
      sortProperty: this.sortProperty,
      sortOrder: this.sortOrder,
    };
    try {
      await this._categoryService.getListCategory(dataRequest).then((item) => {
        this.spin = false;
        if (item.result.responseCode == '00') {
          this.lstData = item.data.map((item: any, index: number) => ({
            ...item,
            stt: (this.page - 1) * this.perPage + index + 1,
          }));
          this.total = item.dataCount;
        }
      });
    } catch (error) {
      this.spin = false;
    }
  }

  onHandleChangeColumn($event: any) {
    this.columns = [...$event];
  }

  id = -1;
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
    this.getLstData();
  }

  onHandleFilter($event: any) {
    if ($event.keyCode == 13 || $event.type == 'click') {
      //  Gọi API
      this.getLstData();
    }
  }

  onHandleClearFilter(key: any) {
    this.filter[key] = '';
    // Gọi API
    this.getLstData();
  }

  onHandlePagination(event: any) {
    this.page = event.page;
    this.perPage = event.size;
    this.getLstData();
  }

  handleCreate() {
    this.action = 'create';
    this.visibleModal = true;
    this.titleModal = 'Thêm mới danh mục cha';
    this.dataInformation.categoryName = '';
  }

  handleUpdate(row: any) {
    this.action = 'update';
    this.visibleModal = true;
    this.titleModal = 'Cập nhật danh mục cha';
    this.dataInformation = {
      categoryName: row.categoryName,
      updatedAt: row.updatedAt,
    };
  }

  handleRead(row: any) {
    this.action = 'read';
    this.visibleModal = true;
    this.titleModal = 'Xem chi tiết danh mục cha';
    this.dataInformation = {
      categoryName: row.categoryName,
      updatedAt: row.updatedAt,
    };
  }

  visibleModalDelete: boolean = false;
  handleDelete(row: any) {
    this.visibleModalDelete = true;
    this.dataInformation = {
      categoryName: row.categoryName,
      updatedAt: row.updatedAt,
    };
  }

  handleConfirmDelete() {
    // Xử lý xóa  (Khi gọi API thành công set dataInformation = {})
  }

  onHandleCancel() {
    this.visibleModal = false;
    this.action = '';
    this.titleModal = '';
    this.dataInformation = {};
  }

  handleConfirm() {
    if (!this.dataInformation.categoryName.trim()) {
      this._messageService.notificationWarning(
        `Bạn cần nhập đủ thông tin yêu cầu`
      );
      return;
    } else {
      if (this.action == 'create') {
        /// Xử lý thêm mới (Khi gọi API thành công set dataInformation = {})
      }
      if (this.action == 'update') {
        /// Xử lý cập nhật (Khi gọi API thành công set dataInformation = {})
      }
    }
  }

  columns: any[] = [
    {
      title: 'Tên danh mục',
      key: 'categoryName',
      width: '400px',
      visible: true,
      sortOrder: '',
    },
    {
      title: 'Ngày cập nhật',
      key: 'updatedAt',
      width: '250px',
      visible: true,
      sortOrder: '',
    },
  ];
}
