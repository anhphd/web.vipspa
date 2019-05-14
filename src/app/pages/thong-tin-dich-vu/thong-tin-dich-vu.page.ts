import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from 'src/app/services/api.service';
import { DichVuService } from 'src/app/services/dich-vu.service';

@Component({
  selector: 'app-thong-tin-dich-vu',
  templateUrl: './thong-tin-dich-vu.page.html',
  styleUrls: ['./thong-tin-dich-vu.page.scss'],
})
export class ThongTinDichVuPage implements OnInit {
  _Link: string = '';
  _OtherServices = [];
  _Loading : boolean = true;
  constructor(public dichvuService: DichVuService, public activeRoute: ActivatedRoute, public _DataService: DataService, public _API: ApiService) {

    if (this.activeRoute.snapshot.paramMap.has('link')) {
      this._Link = this.activeRoute.snapshot.paramMap.get('link');
    }

  }


  ngOnInit() {
    this._Loading = true;
    this.dichvuService.getServiceByID(this._Link).then(res => {
      this._Loading = false;
      console.log(res.content_file);

      if (res) {
        this._API.getHtmlContent(res.content_file).then(data => {
          console.log("xxx");
          let ele = document.getElementById("_ID_Content");
          if (ele) {
            ele.innerHTML = data;
          }
        },err =>{});
      }

    });
    this._OtherServices = this.dichvuService.getServices(0, 10);
  }

}
