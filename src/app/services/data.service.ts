import { Injectable } from '@angular/core';
import { ICategory } from 'src/classes/interface/ICategory';
import { IMenuItem } from 'src/classes/interface/IMenuItem';
import { PaginationData } from 'src/classes/base/PaginationData';
import { ProductService } from './product.service';
import { IProduct } from 'src/classes/interface/IProduct';
import { IPaginationData } from 'src/classes/interface/IPaginationData';



import { Storage } from '@ionic/storage';

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

  constructor(public _Storage: Storage, public _ProductService: ProductService) {
    this._MenuItems = [
      { id: 'home', name: 'Trang chủ', url: '/home' },
      { id: 'product', name: 'Sản phẩm', url: '/product' },
      { id: 'news', name: 'Tin tức', url: '/news' },
      { id: 'company', name: 'Hỗ trợ', url: '/company' }
    ];

    this._Categories = [
      {
        id: "swimspa", name: "Bể bơi ngoài trời", thumb: '', products: []
      },
      {
        id: "mayxonghoi", name: "Máy xông hơi", thumb: '', priority: 9, products: []
      },
      {
        id: "luxuryspa", name: "Luxury Spa", thumb: '', products: []
      },
      {
        id: "saunaroom", name: "Phòng xông hơi", thumb: '', priority: 10, products: []
      },
      {
        id: "massagebathtub", name: "Bể xục", thumb: '', priority: 8, products: []
      },
      {
        id: "steambathroom", name: "Steam Bathroom", thumb: '', products: []
      },
      {
        id: "showercolumn", name: "Phụ kiện", thumb: '', priority: 9, products: []
      },
      { id: "gazebo", name: "Gazebo", thumb: '', products: [] },
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

  getProductDetail(productID: string) {
    return { "id": "549", "images": ["http://www.chinamesda.com/imageRepository/6a00013f-26b8-49d1-a3ca-b37e7190c14f.jpg", "http://www.chinamesda.com/imageRepository/cc2f17fd-b44f-4ab5-ac2d-6e927069bd7f.jpg", "http://www.chinamesda.com/imageRepository/f787a296-c482-4041-aa48-a4785591c378.jpg", "http://www.chinamesda.com/imageRepository/54d403c1-a342-433c-999e-0ac007bd3f55.jpg", "http://www.chinamesda.com/imageRepository/c5e48318-9d78-4c7b-a6d1-a0d12bdd706e.jpg", "http://www.chinamesda.com/imageRepository/093de31f-ff16-430d-b671-fd438b103a6b.jpg"], "product": { "name": "WS-1818", "code": "WS-1818", "brand": "1500x1100x1900mm top:1700x1300x2100mm" }, "details": [{ "name": "WS-1818", "value": "Configuration" }, { "name": "Type", "value": "Sauna" }, { "name": "Control system", "value": "1pc" }, { "name": "Wooden material", "value": "Hemlock: External, Internal: Aspen" }, { "name": "Lamp", "value": "LED color changing light, Head lamp 1pc" }, { "name": "Music", "value": "Bluetooth,FM,MP3" }, { "name": "Heating device", "value": "Harvia sauna stove Vega 3kW" }, { "name": "Accessories", "value": "Cask,Woodenspoon,Thermo-hygrometer,Sandglass" }] };
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
}
