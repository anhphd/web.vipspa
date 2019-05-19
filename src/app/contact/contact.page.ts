import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public _MenuService : MenuService, public _DataService: DataService) {
    this._MenuService.setMenuSelected('lien-he');
  }

  ngOnInit() {
  }

}
