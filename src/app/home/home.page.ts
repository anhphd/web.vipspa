import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  _Loading: boolean = true;
  _PageContent: string = "";
  constructor(public _DataService: DataService) {
    this._DataService.setMenuSelected('trang-chu');
    this._LoadData();
  }

  _LoadData() {
    this._DataService.getHtmlContent("trang-chu").then(res => {
      if (res) {
        this._PageContent = res;
      }
      this._Loading = false;
    }, error => {
      this._Loading = false;
    });
  }
}
