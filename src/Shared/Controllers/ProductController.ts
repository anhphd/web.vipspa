import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { APIController } from './APIController';
import { IProductItem } from '../Models/Interfaces/IProductItem';
import { BaseController } from './BaseController';
import { Cmd } from '../Utils/Network/Cmd';

@Injectable({
  providedIn: 'root'
})
export class ProductController extends BaseController<IProductItem> {

  constructor(public API: APIController) {
    super(API, Cmd.PRODUCT);
  }

  all(category?: string) {
    let params = new HttpParams();
    if (category) {
      params = params.append("category", category);
    }
    return this.API.get(this.router + "/all", params);
  }

}
