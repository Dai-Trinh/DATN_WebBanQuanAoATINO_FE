import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base.service';

@Injectable({
  providedIn: 'root',
})

export class UserService {
    constructor(private _baseService: BaseService) {}
  
    //TODO QUẢN LÝ BANNER
    getBanner(dataRequest: any){
       return this._baseService.postData('banner', dataRequest);
    }
  
    //TODO GET PRODUCT
    getProduct(dataRequest: any){
        return this._baseService.postData('product', dataRequest);
    }

    getProductDetail(id: any){
        return this._baseService.getData('product/' + id);
    }


    //TODO GET CATEGORY
    getCategory(){
        return this._baseService.getData('category');
    }

  }
  