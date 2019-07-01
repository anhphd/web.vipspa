import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { APIController } from './APIController';
import { IServiceItem } from '../Models/Interfaces/IServiceItem';
import { BaseController } from './BaseController';
import { Cmd } from '../Utils/Network/Cmd';

@Injectable({
  providedIn: 'root'
})
export class ServiceController extends BaseController<IServiceItem> {
  constructor(public API: APIController) {
    super(API, Cmd.SERVICE);
  }
}
