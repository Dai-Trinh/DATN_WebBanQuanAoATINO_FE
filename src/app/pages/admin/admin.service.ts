import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _baseService: BaseService) {}

  // TODO: QUẢN LÝ DANH MỤC
  getListCategory(dataRequest: any) {
    return this._baseService.postData(`admin/category`, dataRequest);
  }

  saveCategory(dataRequest: any){
    return this._baseService.postData(`admin/category/save`, dataRequest);
  }

  updateCategory(id: any, dataRequest: any){
    return this._baseService.putData(`admin/category/update/${id}`, dataRequest);
  }

  deleteCategory(id: any){
    return this._baseService.deleteData(`admin/category/delete/${id}`);
  }

  // TODO: QUẢN LÝ DANH MỤC CHA
  getListCategoryParent(dataRequest: any) {
    return this._baseService.postData(`admin/category/parent`, dataRequest);
  }


  //TODO: QUẢN LÝ BANNER
  getListBanner(dataRequest: any){
    return this._baseService.postData(`admin/banner`, dataRequest);
  }

  saveBanner(dataRequest: any){
    return this._baseService.postData(`admin/banner/save`, dataRequest);
  }
}
