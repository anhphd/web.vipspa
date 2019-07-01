import { Injectable } from '@angular/core';
import { BaseController } from './BaseController';
import { IProductSupport } from '../Models/Interfaces/IProductSupport';
import { APIController } from './APIController';
import { Cmd } from '../Utils/Network/Cmd';

@Injectable({
  providedIn: 'root'
})
export class ProductSupportController extends BaseController<IProductSupport> {

  constructor(public API: APIController) {
    super(API, Cmd.SUPPORT);
  }

}
