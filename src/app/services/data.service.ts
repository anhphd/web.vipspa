import { Injectable } from '@angular/core';
import { ICategory } from 'src/classes/interface/ICategory';
import { IMenuItem } from 'src/classes/interface/IMenuItem';
import { PaginationData } from 'src/classes/base/PaginationData';
import { ProductService } from './product.service';
import { IProduct } from 'src/classes/interface/IProduct';
import { IPaginationData } from 'src/classes/interface/IPaginationData';



import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  _Categories: Array<ICategory> = [];
  _CategorySelected: ICategory = null;
  _MenuItems: Array<IMenuItem> = [];
  _MenuItemSelected: IMenuItem;
  _DefaultProductPerPage: number = 12;
  _PaginationSelected: IPaginationData;
  private _PaginationMap: Map<string, IPaginationData> = new Map<string, IPaginationData>();
  private _RecentProducts: Array<IProduct> = [];


  constructor(public _Storage: Storage, public _ProductService: ProductService, public httpClient: HttpClient) {
    this._MenuItems = [
      { id: 'trang-chu', name: 'Trang chủ', url: 'trang-chu' },
      { id: 'san-pham', name: 'Sản phẩm', url: 'san-pham' },
      { id: 'dich-vu', name: 'Dịch vụ', url: 'dich-vu' },
      { id: 'tin-tuc', name: 'Tin tức', url: 'tin-tuc' },
      { id: 'cong-ty', name: 'Hỗ trợ', url: 'cong-ty' }
    ];

    this._Categories = [
      {
        id: "be-boi-massage", name: "Bể bơi massage", thumb: '', products: []
      },
      {
        id: "may-xong-hoi", name: "Máy xông hơi", thumb: '', priority: 9, products: []
      },
      {
        id: "be-tam-massage", name: "Bể tắm massage", thumb: '', products: []
      },
      {
        id: "phong-xong-hoi-kho", name: "Phòng xông hơi khô", thumb: '', priority: 10, products: []
      },
      {
        id: "phong-xong-hoi-hon-hop", name: "Phòng xông hơi hỗn hợp", thumb: '', priority: 10, products: []
      },
      {
        id: "bon-tam-massage", name: "Bồn tắm massage", thumb: '', priority: 8, products: []
      },
      {
        id: "phong-xong-hoi-uot", name: "Phòng xông hơi ướt", thumb: '', products: []
      },
      {
        id: "may-va-phu-kien", name: "Máy và thiết bị", thumb: '', priority: 9, products: []
      },
      { id: "vong-canh-spa", name: "Vọng cảnh spa", thumb: '', products: [] },
    ];


    for (let category of this._Categories) {
      category.products = this._ProductService.getProducts(category.id, -1);
      category.totalProducts = category.products.length;
    }

    this._Categories = this._Categories.sort((a, b) => {
      var aP: number = a.priority ? a.priority : 0;
      var bP: number = b.priority ? b.priority : 0;
      return bP - aP;
    });
    this.setSelectedCategory(this._Categories[0]);
  }
  setMenuSelected(id: string) {
    this._MenuItemSelected = this._MenuItems.find(ele => { return ele.id == id; });
  }
  getProducts(cateogryID: string, page: number, itemsPerPage?: number): Array<IProduct> {
    let category: ICategory = this._Categories.find(ele => { return ele.id == cateogryID; });
    if (category) {
      itemsPerPage = itemsPerPage ? itemsPerPage : this._DefaultProductPerPage;
      let results: Array<IProduct> = [];
      let index: number = page * itemsPerPage;
      while (index < category.products.length && results.length < itemsPerPage) {
        if (category.products[index].category) {
          results.push(category.products[index]);
        }
        index++;
      }
      return results;
    }
    return [];
  }


  private _GetSelectedPagination(): IPaginationData {
    if (this._CategorySelected) {
      if (!this._PaginationMap.has(this._CategorySelected.id)) {
        let paginationData = new PaginationData();
        paginationData.initialize({
          totalItems: this._CategorySelected.products.length,
          selectedPageIndex: 0
        });
        this._PaginationMap.set(this._CategorySelected.id, paginationData)
      }
      return this._PaginationMap.get(this._CategorySelected.id);
    }
    return null;
  }

  setSelectedCategory(category: ICategory) {
    this._CategorySelected = category;
    if (category) {
      this._PaginationSelected = this._GetSelectedPagination();
    }
  }

  getCategoryProducts(): Array<IProduct> {
    if (!this._CategorySelected) return [];
    return this.getProducts(this._CategorySelected.id, this._PaginationSelected ? this._PaginationSelected.selectedPageIndex : 0);
  }

  getProductDetail(productID: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`assets/datas/${productID}.json`).subscribe((response) => {
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

  getHtmlContent(link: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`assets/html/${link}.html`, {
        responseType: 'text'
      }).subscribe((response) => {
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



  getSimilarProducts(productID: string): Array<IProduct> {
    if (!this._CategorySelected) return;
    let indexOfProduct = 0;
    for (let i = 0; i < this._CategorySelected.products.length; i++) {
      let product = this._CategorySelected.products[i];
      if (product.id == productID) {
        indexOfProduct = i;
        break;
      }
    }

    let index = indexOfProduct + 1;
    var results: Array<IProduct> = [];
    while (results.length < 8 && index < this._CategorySelected.products.length) {
      results.push(this._CategorySelected.products[index]);
      index++;
    }

    index = indexOfProduct - 1;

    while (results.length < 8 && index > 0) {
      results.unshift(this._CategorySelected.products[index]);
      index--;
    }

    return results;
  }

  addProductToRecent(product: IProduct) {
    if (!product) {
      return;
    }
    let inListProduct = this._RecentProducts.find(item => {
      return item.id == product.id;
    });
    if (inListProduct) {
      let index = this._RecentProducts.indexOf(inListProduct);
      if (index != -1) this._RecentProducts.splice(index, 1);
    }
    this._RecentProducts.unshift(product);
    while (this._RecentProducts.length > 10) { this._RecentProducts.pop(); }

    this._Storage.set('_recent_products', JSON.stringify(this._RecentProducts));
  }
  getRecentProducts(): Promise<Array<IProduct>> {
    return new Promise((resolve, reject) => {
      this._Storage.get('_recent_products').then(
        data => {
          if (data) {
            resolve(JSON.parse(data));
          } else {
            return resolve([]);
          }
        }
      ).catch(err => {
        return reject();
      });
    });
  }

  getProductByID(productID): IProduct {
    if (this._CategorySelected) {
      return this._CategorySelected.products.find(ele => {
        return ele.id == productID;
      });
    }
    return null;
  }


  public _AppData = {
    name: "Steamtec",
    version: "1.0.0",
    copyright: "@ Copyright, 2019 Steamtec Hà Đông Hà Nội"
  };
}
