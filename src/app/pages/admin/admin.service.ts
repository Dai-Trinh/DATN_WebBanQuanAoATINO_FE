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

  changeBanner(id: any){
    return this._baseService.getData(`admin/banner/${id}/change`)
  }

  deleteBanner(id: any){
    return this._baseService.deleteData(`admin/banner/delete/${id}`)
  }


  //TODO: QUẢN LÝ SHOP
  getListShop(dataRequest: any){
    return this._baseService.postData('admin/shop', dataRequest)
  }

  saveShop(dataRequest: any){
    return this._baseService.postData('admin/shop/save', dataRequest)
  }

  updateShop(dataRequest: any){
    return this._baseService.putData('admin/shop/update', dataRequest);
  }

  deleteShop(id: any){
    return this._baseService.deleteData(`admin/shop/delete/${id}`)
  }

  //TODO: QUẢN LÝ MÀU SẮC
  getListColor(dataRequest: any){
    return this._baseService.postData('admin/color', dataRequest)
  }


  //TODO: QUẢN LÝ SIZE
  getListSize(dataRequest: any){
    return this._baseService.postData('admin/size', dataRequest)
  }


  //TODO: QUẢN LÝ SẢN PHẨM
  getListProduct(dataRequest: any){
    return this._baseService.postData('admin/product', dataRequest);
  }

  getProduct(id: any){
    return this._baseService.getData('admin/product/' + id);
  }

  saveProduct(dataRequest: any){
    return this._baseService.postData('admin/product/save', dataRequest);
  }

  updateProduct(id: any, dataRequest: any){
    return this._baseService.putData('admin/product/update/' + id, dataRequest);
  }

  delete(id: any){
    return this._baseService.deleteData('admin/product/delete/' + id);
  }


  //TODO PRODUCT NEW
  getListProductNew(dataRequest: any){
    return this._baseService.postData('admin/product-import', dataRequest)
  }

  saveProductImport(dateRequest: any){
    return this._baseService.postData('admin/product-import/save', dateRequest);
  }

  updateProductImport(id: any, dataRequest: any){
    return this._baseService.putData('admin/product-import/update/' + id, dataRequest)
  }

  deleteProductImpory(id: any){
    return this._baseService.deleteData('admin/product-import/delete/' + id);
  }

  //TODO QUẢN LÝ TIN TỨC
  getListNews(dataRequest: any){
    return this._baseService.postData('admin/news', dataRequest);
  }

  getNews(id: any){
    return this._baseService.getData('admin/news/' + id);
  }

  saveNews(dataRequest: any){
    return this._baseService.postData('admin/news/save', dataRequest);
  }

  updateNews(id: any, dataRequest: any){
    return this._baseService.putData('admin/news/update/' + id, dataRequest);
  }

  deleteNews(id: any){
    return this._baseService.deleteData('admin/news/delete/' + id);
  }

  changeNewsVisible(id: any){
    return this._baseService.getData('admin/news/' +id +'/change-visible')
  }

  //QUẢN LÝ BỘ SƯU TẬP
  getListCollection(dataRequest: any){
    return this._baseService.postData('admin/collection', dataRequest);
  }

  saveCollection(dataRequest: any){
    return this._baseService.postData("admin/collection/save", dataRequest);
  }

  updateCollection(id: any, dataRequest: any){
    return this._baseService.putData("admin/collection/update/" + id, dataRequest);
  }

  deleteCollection(id: any){
    return this._baseService.deleteData("admin/collection/" + id);
  }

}
