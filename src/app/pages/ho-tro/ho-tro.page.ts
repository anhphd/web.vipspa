import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ho-tro',
  templateUrl: './ho-tro.page.html',
  styleUrls: ['./ho-tro.page.scss'],
})
export class HoTroPage implements OnInit {
 
  ngOnInit(): void {
    
  }
  _Loading: boolean = true;
  _PageContent: string = "";
  constructor(public _API: ApiService, public _DataService: DataService) {
    this._DataService.setMenuSelected('ho-tro');
    this._LoadData();
  }

  _LoadData() {
    this._API.getHtmlContent("assets/html/ho-tro.html").then(res => {
      if (res) {
        let ele = document.getElementById("_ID_PAGECONTENT");
        if (ele) {
          ele.innerHTML = res;
        }
      }
      this._Loading = false;
    }, error => {
      this._Loading = false;
    });
  }

}
