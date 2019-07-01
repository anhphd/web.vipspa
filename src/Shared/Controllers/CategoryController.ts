import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { APIController } from './APIController';
import { ICategoryItem } from '../Models/Interfaces/ICategoryItem';
import { BaseController } from './BaseController';
import { Cmd } from '../Utils/Network/Cmd';

@Injectable({
  providedIn: 'root'
})
export class CategoryController extends BaseController<ICategoryItem> {
  constructor(public API: APIController) {
    super(API,Cmd.CATEGORY);
  }  
}
