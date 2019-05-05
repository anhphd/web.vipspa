import { Injectable } from '@angular/core';
import { IProduct } from 'src/classes/interface/IProduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _DefaultProductPerPage: number = 12;
  _Products: Array<IProduct> = [];

  constructor(public httpClient: HttpClient) {
    this.getDataFromJson('assets/data/app.json').then(res => { this._OnResponseAppData(res); }, error => { });
  }
  public LoadData() {
    return new Promise((resolve, reject) => {
      if (this._Products.length > 0) return resolve();
      this.getDataFromJson('assets/data/products.json').then(res => {
        this._OnResponseAppData(res);
        return resolve();
      }, error => {
        return reject();
      });
    });
  }

  _OnResponseAppData(res) {
    this._Products = res;
  }
  getDataFromJson(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((response) => {
        if (response) {
          return resolve(response);
        } else {
          return reject();
        }
      }, error => {
        return reject(error);
      });
    });
  }

  _GetProducts(category: string, page: number, itemPerPage?: number): Array<IProduct> {
    if (page == -1) {
      return this._Products.filter(item => {
        return item.category && item.category == category;
      });
    }
    itemPerPage = itemPerPage ? itemPerPage : this._DefaultProductPerPage;
    let results: Array<IProduct> = [];
    let index: number = 0;
    let itemIndex: number = 0;
    while (index < this._Products.length && results.length < itemPerPage) {
      if (this._Products[index].category && this._Products[index].category == category) {
        itemIndex++;
        if (itemIndex >= page * itemPerPage) {
          results.push(this._Products[index]);
        }
      }
      index++;
    }
    return results;
  }
  getProducts(category: string, page: number, itemPerPage?: number): Promise<Array<IProduct>> {
    return new Promise((resolve, reject) => {
      if (this._Products.length == 0) {
        this.LoadData().then(res => {
          return resolve(this._GetProducts(category, page, itemPerPage));
        }, error => {
          return reject();
        });
      }else{
        return resolve(this._GetProducts(category, page, itemPerPage));
      }
    });

  }
}
