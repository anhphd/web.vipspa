import { Component, OnInit } from '@angular/core';
import { IHTMLContent } from 'src/classes/interface/IHTMLContent';
import { DataService } from 'src/app/services/data.service';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {
  _CanLoadMore: boolean = true;
  _CurrentPage: number = 0;
  _ITemPerPage = 6;
  _News: Array<IHTMLContent> = [];
  _Loading = true;
  _Link: string = '';
  _Content : string = "";
  constructor(public _MenuService : MenuService,public _API: ApiService, public activeRoute: ActivatedRoute, public _DataService: DataService, public _NewService: NewsService) {
    this._MenuService.setMenuSelected('tin-tuc');

    if (activeRoute.snapshot.paramMap.has('link')) {
      this._Link = activeRoute.snapshot.paramMap.get('link');
    }
  }
  ngOnInit(){

  }
  ionViewWillEnter() {
    this._NewService.getNewByID(this._Link).then(item => {
      if (item) {
        this._API.getHtmlContent(item.content_file).then(res => {
          this._Content = res;
          // let ele = document.getElementById("_IDNewContent");
          // if (ele) {
          //   console.log("Binding result");
          //   ele.innerHTML = res;
          // }
        });
      }
    }, err => {

    });
    this.LoadData();
  }

  LoadData() {
    this._CanLoadMore = true;
    this._Loading = true;
    this._CurrentPage = 0;
    this._NewService.LoadData().then(res => {
      this._News = this._NewService.getNews(this._CurrentPage, this._ITemPerPage);
      this._CanLoadMore = this._News.length == this._ITemPerPage;
      this._Loading = false;



    }, err => {

    });
  }


  onClickLoadMore() {
    this._CurrentPage++;
    let items = this._NewService.getNews(this._CurrentPage, this._ITemPerPage);
    this._CanLoadMore = this._News.length == this._ITemPerPage;
    for (let item of items) {
      this._News.push(item);
    }
  }

}
