import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  view: string = "profile";
  constructor() { }

  ngOnInit() {
  }
  showView(viewName: string) {
    this.view = viewName ? viewName : 'profile';
  }

}
