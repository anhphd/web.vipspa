import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { APIController } from './APIController';
import { IMenuItem } from '../Models/Interfaces/IMenuItem';
import { BaseController } from './BaseController';
import { Cmd } from '../Utils/Network/Cmd';

@Injectable({
  providedIn: 'root'
})
export class MenuController extends BaseController<IMenuItem> {

  constructor(public API: APIController) {
    super(API, Cmd.MENU);
  }

}
