import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  constructor(public _MenuService: MenuService, public _DataService: DataService, public activeRoute: ActivatedRoute, public router: Router) {
    this.searchQuery = "";
    if (activeRoute.snapshot.paramMap.has('query')) {
      this.searchQuery = activeRoute.snapshot.paramMap.get('query');
    }
    this._MenuService.LoadData();
  }

  ngOnInit() { }

  onClickClearSearch() {
    this.searchQuery = '';
  }
  onClickSearch() {
    if (this.searchQuery) this.router.navigateByUrl("/tim-kiem/" + this.searchQuery);
    this.searchQuery = '';
  }
  onKeypress(event) {
    if (event.keyCode == 13) {
      this.onClickSearch();
    }
  }
}
