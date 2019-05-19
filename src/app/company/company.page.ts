import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  view: string = "profile";
  constructor(public _MenuService : MenuService,public _DataService : DataService) {
    this._MenuService.setMenuSelected('san-pham');
   }

  ngOnInit() {
  }
  showView(viewName: string) {
    this.view = viewName ? viewName : 'profile';
  }

}
