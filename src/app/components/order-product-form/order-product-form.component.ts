import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IProduct } from 'src/classes/interface/IProduct';
import { DataService } from 'src/app/services/data.service';
export class  OrderProductModel {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '',
              public language: string = '') {
  }
}


@Component({
  selector: 'app-order-product-form',
  templateUrl: './order-product-form.component.html',
  styleUrls: ['./order-product-form.component.scss'],
})
export class OrderProductFormComponent implements OnInit {
  model: OrderProductModel = new OrderProductModel();
  @ViewChild('f') form: any;
  
  @Input('data') product: IProduct;

  constructor(public _DataService : DataService) { }


  ngOnInit() {
  }

}
