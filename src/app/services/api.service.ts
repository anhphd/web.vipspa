import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  getHtmlContent(link: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(link, {
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

}
