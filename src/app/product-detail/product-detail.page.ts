import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ICategory } from 'src/classes/interface/ICategory';
import { IProduct } from 'src/classes/interface/IProduct';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  view: string = '';

  _Data = {};

  _CurrentImage: string = '';

  _SimilarProducts: Array<IProduct> = [];
  _RecentProducts: Array<IProduct> = [];
  constructor(public sanitizer: DomSanitizer, private activeRoute: ActivatedRoute, public _DataService: DataService, public router: Router) {
    let productID = '549';
    if (activeRoute.snapshot.paramMap.has('productID')) {
      productID = activeRoute.snapshot.paramMap.get('productID');
    }
    this._Data = this._DataService.getProductDetail(productID);
    this._CurrentImage = this._Data['images'][0];
    this._SimilarProducts = this._DataService.getSimilarProducts(productID);
    this._DataService.addProductToRecent(this._DataService.getProductByID(productID));
    this._DataService.getRecentProducts().then(products => {
      this._RecentProducts = products;
    });
  }
  onClickSelectImage(image: string) {
    this._CurrentImage = image;
  }
  ngOnInit() {
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

  onClickSelectCategory(category: ICategory) {
    this._DataService.setSelectedCategory(category);
    this.router.navigateByUrl('/product/'+ category.id);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url.startsWith('http') ? url : ('http://www.chinamesda.com/imageRepository/' + url));
  }
}
