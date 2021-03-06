import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ICategory } from 'src/classes/interface/ICategory';
import { IProduct } from 'src/classes/interface/IProduct';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  view: string = '';

  _Data = null;
  _Loading: boolean = false;
  _CurrentImage: string = '';

  _SimilarProducts: Array<IProduct> = [];
  _RecentProducts: Array<IProduct> = [];
  _ProductID: string = '548';
  _Product: IProduct = null;
  constructor(public _MenuService : MenuService,public sanitizer: DomSanitizer, private activeRoute: ActivatedRoute, public _DataService: DataService, public router: Router) {

    this._DataService.LoadData().then(res => {
      if (activeRoute.snapshot.paramMap.has('productID')) {
        this._ProductID = activeRoute.snapshot.paramMap.get('productID');
      }
      this.InitComponent();
    }, err => {

    });
    this._MenuService.setMenuSelected('san-pham');

  }
  InitComponent() {

    this._DataService.getProductByID(this._ProductID).then(product => {
      this._Product = product;
      if (this._Product && this._Product.category) {
        this._DataService.setSelectedCategoryByID(this._Product.category);
      }
      this.requestProductDetail();
      if (this._Product) {
        let categoryID = this._Product.category;
        if (categoryID) {
          this._SimilarProducts = this._DataService.getSimilarProducts(this._ProductID);
        }
      }

      this._DataService.addProductToRecent(this._Product);
      this._DataService.getRecentProducts().then(products => {
        this._RecentProducts = products;
      });

      if (this._Product.url) {
        this._DataService.getHtmlContent(this._Product.url).then(res => {
          let ele = document.getElementById('_ID_Product_DETAIL_CONTNENT');
          if (ele) {
            ele.innerHTML = res;
          }
        }, err => {

        });
      }
    }, error => {

    });
  }
  requestProductDetail() {
    this._Loading = true;
    this._DataService.getProductDetail(this._ProductID).then(res => {
      this.onResponseProductDetail(res);
      this._Loading = false;
    }, error => {
      this._Data = null;
      this._Loading = false;
    }).catch(er => {
      this._Data = null;
      this._Loading = false;
    });
  }
  onResponseProductDetail(res) {
    this._Data = res;
    setTimeout(() => {
      this._initEventHandlers();
    }, 1000);

  }
  _initEventHandlers() {
    if (!this._Data) return;
    this._CurrentImage = this._Data['images'][0];
    let imagePreviewSide = document.getElementById('_ID_ImagePreviewSide');
    let imagePreviewContainer = document.getElementById('_ID_ImgPreviewContainer');
    let previewShadow = document.getElementById('_ID_Preview_Shadow');
    let rect = imagePreviewContainer.getBoundingClientRect();
    let ratio: number = 1 / 3;
    imagePreviewContainer.onmouseenter = event => {
      let imageSideContainer = document.getElementById('_ID_ImgPreviewSideContainer');
      rect = imagePreviewContainer.getBoundingClientRect();

      imageSideContainer.style.width = rect.height + 'px';
      imageSideContainer.style.height = rect.height + 'px';
      imageSideContainer.style.left = '51%';
      imageSideContainer.style.top = '5px';
      imageSideContainer.style.visibility = 'visible';

      previewShadow.style.width = rect.height * ratio + 'px';
      previewShadow.style.height = rect.height * ratio + 'px';

      imagePreviewSide.style.width = rect.width / ratio + 'px';
      imagePreviewSide.style.height = rect.height / ratio + 'px';

      let x = event.clientX - rect.left; //x position within the element.
      let y = event.clientY - rect.top;

      let left = x - previewShadow.clientWidth / 2;
      if (left < 0) left = 0;
      if (left > rect.width - previewShadow.clientWidth) {
        left = rect.width - previewShadow.clientWidth;
      }
      let top = y - previewShadow.clientHeight / 2;
      if (top < 0) top = 0;
      if (top > rect.height - previewShadow.clientHeight) {
        top = rect.height - previewShadow.clientHeight;
      }

      previewShadow.style.transform = `translate(${left}px,${top}px)`;
      imagePreviewSide.style.transform = `translate(${-left / ratio}px,${-top / ratio}px)`;
    }
    imagePreviewContainer.onmouseleave = event => {
      let imageSideContainer = document.getElementById('_ID_ImgPreviewSideContainer');
      imageSideContainer.style.visibility = 'hidden';

    }
    imagePreviewContainer.onmousemove = event => {
      let x = event.clientX - rect.left; //x position within the element.
      let y = event.clientY - rect.top;

      let left = x - previewShadow.clientWidth / 2;
      if (left < 0) left = 0;
      if (left > rect.width - previewShadow.clientWidth) {
        left = rect.width - previewShadow.clientWidth;
      }
      let top = y - previewShadow.clientHeight / 2;
      if (top < 0) top = 0;
      if (top > rect.height - previewShadow.clientHeight) {
        top = rect.height - previewShadow.clientHeight;
      }

      previewShadow.style.transform = `translate(${left}px,${top}px)`;
      imagePreviewSide.style.transform = `translate(${-left / ratio}px,${-top / ratio}px)`;
    }

  }

  onClickSelectImage(image: string) {
    this._CurrentImage = image.replace("/small/","/").replace("/small/","/").replace("/medium/","/").replace("/large/","/");
  }
  
  ngOnInit() {

  }

  onClickSelectCategory(category: ICategory) {
    this._DataService.setSelectedCategory(category);
    this.router.navigateByUrl('/san-pham/' + category.id);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url.startsWith('http') ? url : ('http://www.chinamesda.com/imageRepository/' + url));
  }
}
