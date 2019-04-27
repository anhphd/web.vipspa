import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(public _DataService: DataService) {
    this._DataService.setMenuSelected('tin-tuc');
  }
  ngOnInit() {
  }

}
