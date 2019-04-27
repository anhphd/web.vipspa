import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICategory } from 'src/classes/interface/ICategory';
import { Router } from '@angular/router';
import { IMenuItem } from 'src/classes/interface/IMenuItem';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public _DataService: DataService, public router: Router) { }

  ngOnInit() { }

  onClickCategory(category: ICategory) {
    this.router.navigateByUrl('san-pham/' + category.id);
  }
  onClickMenu(menu: IMenuItem) {
    this.router.navigateByUrl(menu.url);
  }
}
