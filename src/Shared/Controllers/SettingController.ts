import { Injectable } from '@angular/core';
import { APIController } from './APIController';
import { BaseController } from './BaseController';
import { ISettingItem } from '../Models/Interfaces/ISettingItem';
import { Cmd } from '../Utils/Network/Cmd';

@Injectable({
  providedIn: 'root'
})
export class SettingController extends BaseController<ISettingItem> {
  constructor(public API: APIController) {
    super(API, Cmd.SETTING);
  }
}
