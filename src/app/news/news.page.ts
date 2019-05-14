import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NewsService } from '../services/news.service';
import { IHTMLContent } from 'src/classes/interface/IHTMLContent';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  _CanLoadMore: boolean = true;
  _CurrentPage: number = 0;
  _ITemPerPage = 6;
  _News: Array<IHTMLContent> = [];
  _Loading = true;
  constructor(public _DataService: DataService, public _NewService: NewsService) {
    this._DataService.setMenuSelected('tin-tuc');
  }
  ngOnInit() {
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
