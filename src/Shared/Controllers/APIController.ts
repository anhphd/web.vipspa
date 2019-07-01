import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { ConfigController } from './ConfigController';

@Injectable({
  providedIn: 'root'
})
export class APIController {

  Debug: boolean = false;

  constructor(public httpClient: HttpClient, public configService: ConfigController) {

  }

  upload(url, file, folder?: string) {
    if (this.Debug) {
      console.log("Request upload : ", url, file.name, folder ? folder : "");
    }
    return new Promise((resolve, reject) => {
      const formData: FormData = new FormData();
      formData.append('folder', folder);
      formData.append('file', file, file.name);
      const req = new HttpRequest('POST', this.configService.getDomain() + url, formData, {
        headers: new HttpHeaders({
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
        })
      });
      this.httpClient.request(req).subscribe(event => {
        if (event instanceof HttpResponse) {
          return resolve(event.body);
        }
      });
    });
  }
  getHtmlContent(url) {
    if (this.Debug) {
      console.log("getHtmlContent : ", url);
    }
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.configService.getDomain() + url, {
        responseType: "text"
      }).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  get(url, params) {
    if (this.Debug) console.log("get : ", this.configService.getDomain() + url);
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.configService.getDomain() + url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        }), params: params
      }).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  post(url, params, body, headers?) {
    if (this.Debug) console.log("post : ", url);
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.configService.getDomain() + url, body, {
        headers: headers ? headers : new HttpHeaders({
          "Content-Type": "application/json"
        }), params: params
      }).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
}
