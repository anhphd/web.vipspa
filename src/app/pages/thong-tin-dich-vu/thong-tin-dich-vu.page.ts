import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-thong-tin-dich-vu',
  templateUrl: './thong-tin-dich-vu.page.html',
  styleUrls: ['./thong-tin-dich-vu.page.scss'],
})
export class ThongTinDichVuPage implements OnInit {
  _Link : string = '';
  constructor(public activeRoute: ActivatedRoute, public _DataService: DataService) {
    
    if (this.activeRoute.snapshot.paramMap.has('link')) {
      this._Link = this.activeRoute.snapshot.paramMap.get('link');
      this._DataService.getHtmlContent(this._Link).then(res => {
        this.onResponseContent(res);
      }, err => {

      });

    }

  }

  onResponseContent(res) {
    document.getElementById('_ID_Content').innerHTML = res;
  }

  ngOnInit() {
  }

}
