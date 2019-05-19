import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IHTMLContent } from 'src/classes/interface/IHTMLContent';
import { DichVuService } from 'src/app/services/dich-vu.service';
import { IService } from 'src/classes/interface/IService';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.page.html',
  styleUrls: ['./dich-vu.page.scss'],
})
export class DichVuPage implements OnInit {
  _CanLoadMore: boolean = true;
  _CurrentPage: number = 0;
  _ITemPerPage = 6;
  _Services: Array<IService> = [];
  _Loading = true;
  constructor(public _MenuService : MenuService,public _DataService: DataService, public _DichVuService: DichVuService) {
    this._MenuService.setMenuSelected('dich-vu');
  }
  ngOnInit() {
    this.LoadData();
  }

  LoadData() {
    this._CanLoadMore = true;
    this._Loading = true;
    this._CurrentPage = 0;
    this._DichVuService.LoadData().then(res => {
      this._Services = this._DichVuService.getServices(this._CurrentPage, this._ITemPerPage);
      this._CanLoadMore = this._Services.length == this._ITemPerPage;
      this._Loading = false;
    }, err => {

    });
  }


  onClickLoadMore() {
    this._CurrentPage++;
    let items = this._DichVuService.getServices(this._CurrentPage, this._ITemPerPage);
    this._CanLoadMore = this._Services.length == this._ITemPerPage;
    for (let item of items) {
      this._Services.push(item);
    }
  }
}
