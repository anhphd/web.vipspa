import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/classes/interface/IProduct';
import { DataService } from '../services/data.service';
import { ICategory } from 'src/classes/interface/ICategory';
import { IPaginationItem } from 'src/classes/interface/IPaginationItem';



@Component({
  selector: 'product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  products: Array<IProduct> = []
  _Loading: boolean = false;
  _ProductContainerHeight: string = '400px';

  constructor(private activeRoute: ActivatedRoute, private sanitizer: DomSanitizer, public route: Router, public _DataService: DataService) {

    this._DataService.LoadData().then(() => {
      let categoryID: string = "phong-xong-hoi-kho";
      if (this.activeRoute.snapshot.paramMap.has('categoryID')) {
        categoryID = this.activeRoute.snapshot.paramMap.get('categoryID');
      }

      let category = this._DataService._Categories.find(ele => {
        return ele.id == categoryID;
      });
      if (category) {
        this._DataService.setSelectedCategory(category);
        return;
      }
    }, err => { });
    this._DataService.setMenuSelected('san-pham');
  }
  ngOnInit() {

  }
  ionViewWillEnter() {

    this.loadProductDatas();

  }

  onClickSelectCategory(category: ICategory) {
    this._DataService.setSelectedCategory(category);
    this.loadProductDatas();

    var content = document.getElementById('_ID_Categories_Container');
    if (content) {
      content.scrollIntoView({
        block: 'start',
        behavior: "smooth"
      });
    }
  }
  loadProductDatas() {
    {
      let productContainer = document.getElementById('_IDProductContainer');
      if (productContainer) {
        this._ProductContainerHeight = productContainer.clientHeight + 'px';
      }
    }

    this.products = [];
    this._Loading = true;
    setTimeout(() => {
      this.products = this._DataService.getCategoryProducts();
      this._Loading = false;
    }, 1000);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url.startsWith('http') ? url : ('http://www.chinamesda.com/imageRepository/' + url));
  }
  onClickProduct(product: IProduct) {

  }

  onPageChanged(item: IPaginationItem) {
    this.loadProductDatas();
  }
}
