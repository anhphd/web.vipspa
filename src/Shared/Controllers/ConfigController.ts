import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigController {
  data = {};
  constructor(public httpClient: HttpClient) {
    this.httpClient.get("assets/config.json", {
      responseType: "json"
    }).subscribe(res => {
      this.data = res;
    });
  }
  loadData() {
    return new Promise((resolve, reject) => {
      this.httpClient.get("assets/config.json", {
        responseType: "json"
      }).subscribe(res => {
        this.data = res;
        return resolve(res);
      });
    });
  }

  get(key: string) {
    return this.data[key];
  }
  getDomain() : string{
    if(this.get("domain")) return this.get("domain");
    return "http://31.220.59.187:3000";
  }
}
