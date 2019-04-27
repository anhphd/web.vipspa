import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor() { }


  ngOnInit() {}

}
