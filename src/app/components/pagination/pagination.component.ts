import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationData } from 'src/classes/base/PaginationData';
import { IPaginationItem } from 'src/classes/interface/IPaginationItem';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('data') data: PaginationData;
  @Output('onPageChanged') onPageChangedEventEmitter = new EventEmitter();



  constructor() {
  }

  ngOnInit() { }

  private _RaisePageChangedEvent() {
    if (this.onPageChangedEventEmitter) {
      this.onPageChangedEventEmitter.emit(this.data.selectedPageIndex);
    }
  }
  onClickSelectItem(item: IPaginationItem) {
    if (this.data) {
      this.data.navigateToPage(item.val);
      this._RaisePageChangedEvent();
    }

  }

  onClickFirst() {
    if (this.data) {
      let currentIndex = this.data.selectedPageIndex;
      this.data.navigateToFirstPage();
      if (currentIndex != this.data.selectedPageIndex) this._RaisePageChangedEvent();
    }
  }

  onClickPrevious() {
    if (this.data) {
      let currentIndex = this.data.selectedPageIndex;
      this.data.navigateToPreviousPage();
      if (currentIndex != this.data.selectedPageIndex) this._RaisePageChangedEvent();

    }
  }

  onClickNext() {
    if (this.data) {
      let currentIndex = this.data.selectedPageIndex;
      this.data.navigateToNextPage();
      if (currentIndex != this.data.selectedPageIndex) this._RaisePageChangedEvent();
    }
  }

  onClickLast() {
    if (this.data) {
      let currentIndex = this.data.selectedPageIndex;
      this.data.navigateToLastPage();
      if (currentIndex != this.data.selectedPageIndex) this._RaisePageChangedEvent();
    }
  }
}
