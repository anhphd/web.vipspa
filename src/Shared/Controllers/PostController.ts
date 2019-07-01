import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { APIController } from './APIController';
import { IPostItem } from '../Models/Interfaces/IPostItem';
import { BaseController } from './BaseController';
import { Cmd } from '../Utils/Network/Cmd';

@Injectable({
  providedIn: 'root'
})
export class PostController extends BaseController<IPostItem> {
  constructor(public API: APIController) { super(API, Cmd.POST); }
}
