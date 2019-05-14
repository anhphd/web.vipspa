import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IHTMLContent } from 'src/classes/interface/IHTMLContent';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  _News: Array<IHTMLContent> = [];
  constructor(public _API: ApiService) {

  }

  LoadData() {
    return new Promise((resolve, reject) => {
      if (this._News.length == 0) {
        this._API.getDataFromJson('assets/data/news.json').then(res => {
          this._News = res;
          return resolve();
        }, err => {
          return reject();
        });
      } else {
        return resolve();
      }
    });
  }

  getNews(page : number, itemPerPage : number){
    let items = [];
    for(let i = 0; i< itemPerPage; i++){
      let index = page*itemPerPage + i;
      if(index< this._News.length){
        items.push(this._News[index]);
      }
    }
    return items;
  }

  getNewByID(id : string): Promise<IHTMLContent>{
    return new Promise((resolve, reject)=>{
      if(this._News.length == 0){
        this.LoadData().then(res =>{
          return resolve(this._News.find(ele =>{
            return ele.url == id;
          }));
        }, err =>{
          return reject();
        });
      }else{
        return resolve(this._News.find(ele =>{
          return ele.url == id;
        }));
      }
    });
  }
}
