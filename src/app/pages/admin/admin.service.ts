import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _baseService: BaseService) {}

  // TODO: QUẢN LÝ DANH MỤC
  getListCategory(dataRequest: any) {
    return this._baseService.postData(`url...`, dataRequest);
  }
}
