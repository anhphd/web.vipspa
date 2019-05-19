import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ICategory } from 'src/classes/interface/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  _Categories: Array<ICategory> = [];
  _CategorySelected: ICategory = null;
  constructor(public _API: ApiService) {
  }
  public LoadData() {
    return new Promise((resolve, reject) => {
      if (this._Categories.length == 0) {
        this._API.getDataFromJson('assets/data/categories.json').then(res => {
          this._Categories = res;
          this._Categories = this._Categories.sort((a, b) => {
            var aP: number = a.priority ? a.priority : 0;
            var bP: number = b.priority ? b.priority : 0;
            return bP - aP;
          });
          return resolve();
        }, err => {
          return reject();
        });
      } else {
        return resolve();
      }
    });
  }
  Items(): Array<ICategory> {
    return this._Categories;
  }
  public getItemByID(id: string): Promise<ICategory> {
    return new Promise((resolve, reject) => {
      if (this._Categories.length == 0) {
        this.LoadData().then(res => {
          return resolve(this._Categories.find(ele => {
            return ele.id == id;
          }));
        }, err => {
          return reject();
        });
      } else {
        return resolve(this._Categories.find(ele => {
          return ele.id == id;
        }));
      }
    });
  }
  public setCategorySelected(id: string) {
    this.getItemByID(id).then(item => {
      this._CategorySelected = item;
    });
  }
}
