import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  slideOptions = {
    autoplay: {
      delay: 2000,
    }
  };
  _Banners: Array<{ thumb: string, url: string }> = [];
  constructor(public _DataService: DataService) {
    this._DataService.LoadData().then(res => {
      this.InitializeComponent();
    });
  }

  public InitializeComponent() {
    this._Banners = this._DataService._AppData['banners'];
  }

  ngOnInit() { }

}
