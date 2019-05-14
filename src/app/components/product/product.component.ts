import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/classes/interface/IProduct';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input('data') product: IProduct;

  constructor(private sanitizer: DomSanitizer) {
   
   }

  ngOnInit() {
    if(this.product && this.product.thumb.indexOf('http') == -1){
      this.product.thumb = "http://www.chinamesda.com/imageRepository/"+this.product.thumb;
    }
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url.startsWith('http') ? url : ('http://www.chinamesda.com/imageRepository/' + url));
  }
}
