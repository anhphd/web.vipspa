import { Injectable } from '@angular/core';
import { IMenuItem } from 'src/classes/interface/IMenuItem';
import { ApiService } from './api.service';
import { ICategory } from 'src/classes/interface/ICategory';
import { IService } from 'src/classes/interface/IService';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  _MenuItems: Array<IMenuItem> = [];
  _MenuItemSelected: IMenuItem = null;


  constructor(public _API: ApiService) {
    this.LoadData();
  }


  public LoadData() {
    return new Promise((resolve, reject) => {
      if (this._MenuItems.length == 0) {
        this._API.getDataFromJson('assets/data/menus.json').then(res => {
          this._MenuItems = res;
          return resolve();
        }, err => {
          return reject();
        });
      } else {
        return resolve();
      }
    });
  }

  public getItemByID(id: string): Promise<IMenuItem> {
    return new Promise((resolve, reject) => {
      if (this._MenuItems.length == 0) {
        this.LoadData().then(res => {
          return resolve(this._MenuItems.find(ele => {
            return ele.id == id;
          }));
        }, err => {
          return reject();
        });
      } else {
        return resolve(this._MenuItems.find(ele => {
          return ele.id == id;
        }));
      }
    });
  }
  public setMenuSelected(id: string) {
    this.getItemByID(id).then(item => {
      this._MenuItemSelected = item;
    });
  }

  public onResponseCategories(categories : Array<ICategory>){
    if(!categories) return;
    let productCategory = this._MenuItems.find(item => {
      return item.id == 'san-pham';
    });
    if (productCategory) {
      productCategory.children = [];
      productCategory.children.push({
        id: `/${productCategory.id}`,
        name: "Tất cả",
        url: `/${productCategory.id}`
      });
      for (let category of categories) {
        productCategory.children.push({
          id: `/${productCategory.id}/${category.id}`,
          name: category.name,
          url: `/${productCategory.id}/${category.id}`
        });
      }
    }
  }

  public onResponseServices(services : Array<IService>){
    if(!services) return;
    let serviceMenuItem = this._MenuItems.find(item => {
      return item.id == 'dich-vu';
    });
    if (serviceMenuItem) {
      serviceMenuItem.children = [];
      serviceMenuItem.children.push({
        id: `/${serviceMenuItem.id}`,
        name: "Tất cả",
        url: `/${serviceMenuItem.id}`
      });
      for (let service of services) {
        serviceMenuItem.children.push({
          id: `/${serviceMenuItem.id}/${service.id}`,
          name: service.name,
          url: `/${serviceMenuItem.id}/${service.url}`
        });
      }
    }
  }
}
