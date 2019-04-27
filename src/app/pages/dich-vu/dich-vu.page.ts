import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.page.html',
  styleUrls: ['./dich-vu.page.scss'],
})
export class DichVuPage implements OnInit {
  _Services: Array<{ url: string, name: string; img: string; description: string }> = [];
  _Loading: boolean = false;
  constructor(public _DataService: DataService) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this._Loading = true;
    this._DataService.getDataFromJson('assets/data/services.json').then(res => { this.onLoadedData(res); this._Loading = false; }, err => { this._Loading = false; });
  }
  onLoadedData(res) {
    this._Services = res;
  }
}
