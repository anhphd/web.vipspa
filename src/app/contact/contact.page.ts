import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public _DataService: DataService) {
    this._DataService.setMenuSelected('lien-he');
  }

  ngOnInit() {
  }

}
