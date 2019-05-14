import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/classes/interface/IProduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tim-kiem',
  templateUrl: './tim-kiem.page.html',
  styleUrls: ['./tim-kiem.page.scss'],
})
export class TimKiemPage implements OnInit {
  mQuery: string = '';
  products: Array<IProduct> = [];
  _Products : Array<IProduct> = [];
  currentIndex : number = 0;
  _Loading: boolean = false;
  constructor(private activeRoute: ActivatedRoute, public _DataService: DataService) {
   
    if (activeRoute.snapshot.paramMap.has('query')) {
      this.mQuery = activeRoute.snapshot.paramMap.get('query');
    }
    
  }

  ngOnInit() {
    this._DataService.LoadData().then(()=>{
      this.requestData();
    });
  }
  requestData() {
    this._Loading = true;
    this.currentIndex = 0;
    this._DataService.searchProductByQuery(this.mQuery).then(res => {
      this._Products = res;
      this.currentIndex = 0;
      this._updateProducts();
      this._Loading = false;
    }, err => {
      this._Loading = false;
    });
  }
  _updateProducts(){
    for(let i =0; i<8; i++){
      let index = this.currentIndex*8 + i;
      if(index < this._Products.length){
        this.products.push(this._Products[index]);
      }
    }
  }
  onClickLoadMore(){
    this.currentIndex ++;
    this._updateProducts();
  }

}
