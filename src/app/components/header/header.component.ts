import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  constructor(public _DataService: DataService, public activeRoute: ActivatedRoute, public router: Router) {
    if (activeRoute.snapshot.paramMap.has('query')) {
      this.searchQuery = activeRoute.snapshot.paramMap.get('query');
    } else {
      this.searchQuery = "";
    }
  }

  ngOnInit() { }

  onClickClearSearch() {
    this.searchQuery = '';
  }
  onClickSearch() {
    if (this.searchQuery) this.router.navigateByUrl("/tim-kiem/" + this.searchQuery);
    this.searchQuery = '';
  }
  onKeypress(event){
    if(event.keyCode == 13){
      this.onClickSearch();
    }
  }
}
