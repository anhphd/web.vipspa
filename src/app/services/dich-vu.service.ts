import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IService } from 'src/classes/interface/IService';

@Injectable({
  providedIn: 'root'
})
export class DichVuService {

  _Items: Array<IService> = [];

  constructor(public _API: ApiService) {

  }

  LoadData() {
    return new Promise((resolve, reject) => {
      if (this._Items.length == 0) {
        this._API.getDataFromJson('assets/data/services.json').then(res => {
          this._Items = res;
          return resolve();
        }, err => {
          return reject();
        });
      } else {
        return resolve();
      }
    });
  }
  Items() : Array<IService>{
    return this._Items;
  }
  getServices(page: number, itemPerPage: number) {
    let items = [];
    for (let i = 0; i < itemPerPage; i++) {
      let index = page * itemPerPage + i;
      if (index < this._Items.length) {
        items.push(this._Items[index]);
      }
    }
    return items;
  }

  getServiceByID(id: string): Promise<IService> {
    return new Promise((resolve, reject) => {
      if (this._Items.length == 0) {
        this.LoadData().then(res => {
          return resolve(this._Items.find(ele => {
            return ele.url == id;
          }));
        }, err => {
          return reject();
        });
      } else {
        return resolve(this._Items.find(ele => {
          return ele.url == id;
        }));
      }
    });
  }
}
