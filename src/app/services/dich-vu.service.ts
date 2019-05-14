import { Injectable } from '@angular/core';
import { IHTMLContent } from 'src/classes/interface/IHTMLContent';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DichVuService {
  _Items: Array<IHTMLContent> = [];
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

  getServices(page : number, itemPerPage : number){
    let items = [];
    for(let i = 0; i< itemPerPage; i++){
      let index = page*itemPerPage + i;
      if(index< this._Items.length){
        items.push(this._Items[index]);
      }
    }
    return items;
  }

  getServiceByID(id : string): Promise<IHTMLContent>{
    return new Promise((resolve, reject)=>{
      if(this._Items.length == 0){
        this.LoadData().then(res =>{
          return resolve(this._Items.find(ele =>{
            return ele.url == id;
          }));
        }, err =>{
          return reject();
        });
      }else{
        return resolve(this._Items.find(ele =>{
          return ele.url == id;
        }));
      }
    });
  }
}
