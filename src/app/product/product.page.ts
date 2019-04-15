import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface IProduct {
  id: string;
  name: string;
  thumb: string;
}

interface ICategory {
  id: string;
  name: string;
  thumb: string;
  products: Array<IProduct>;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  view: string = '';

  categories: Array<ICategory> = [
    {
      id: "swimspa", name: "Swim Spa(49)", thumb: '', products: [
        { id: '', name: 'Liquid Acrylic Swim Spa', thumb: 'ct_1_1.jpg' },
        { id: '', name: 'Acrylic Swim Spa', thumb: 'ct_1_2.jpg' },
        { id: '', name: 'Swim Spa Accessories', thumb: 'ct_1_3.jpg' }
      ]
    },
    {
      id: "luxuryspa", name: "Luxury Spa(101)", thumb: '', products: [{ id: '', name: 'Liquid Acrylic Swim Spa', thumb: 'ct_1_1.jpg' },
      { id: '', name: 'Acrylic Swim Spa', thumb: 'ct_1_2.jpg' },
      { id: '', name: 'Swim Spa Accessories', thumb: 'ct_1_3.jpg' }]
    },
    {
      id: "saunaroom", name: "Sauna Room(58)", thumb: '', products: [{ id: '', name: 'Liquid Acrylic Swim Spa', thumb: 'ct_1_1.jpg' },
      { id: '', name: 'Acrylic Swim Spa', thumb: 'ct_1_2.jpg' },
      { id: '', name: 'Swim Spa Accessories', thumb: 'ct_1_3.jpg' }]
    },
    {
      id: "massagebathtub", name: "Massage Bathtub(56)", thumb: '', products: [{ id: '', name: 'Liquid Acrylic Swim Spa', thumb: 'ct_1_1.jpg' },
      { id: '', name: 'Acrylic Swim Spa', thumb: 'ct_1_2.jpg' },
      { id: '', name: 'Swim Spa Accessories', thumb: 'ct_1_3.jpg' }]
    },
    {
      id: "steambathroom", name: "Steam Bathroom(64)", thumb: '', products: [{ id: '', name: 'Liquid Acrylic Swim Spa', thumb: 'ct_1_1.jpg' },
      { id: '', name: 'Acrylic Swim Spa', thumb: 'ct_1_2.jpg' },
      { id: '', name: 'Swim Spa Accessories', thumb: 'ct_1_3.jpg' }]
    },
    {
      id: "showercolumn", name: "Shower Column(8)", thumb: '', products: [{ id: '', name: 'Liquid Acrylic Swim Spa', thumb: 'ct_1_1.jpg' },
      { id: '', name: 'Acrylic Swim Spa', thumb: 'ct_1_2.jpg' },
      { id: '', name: 'Swim Spa Accessories', thumb: 'ct_1_3.jpg' }]
    },
    { id: "gazebo", name: "Gazebo(9)", thumb: '', products: [] },
  ];
  products: Array<IProduct> =
    [{ "id": "WS-S06B-T", "name": "WS-S06B-T", "thumb": "http://www.chinamesda.com/imageRepository/48ced072-a541-4026-bfc4-03b8165105b5.jpg" }, { "id": "WS-S07B-T", "name": "WS-S07B-T", "thumb": "http://www.chinamesda.com/imageRepository/720a59f6-8177-47a5-a24f-c06b2a9af0dd.jpg" }, { "id": "WS-PC05ST WS-PC06ST WS-PC07ST WS-PC08ST", "name": "WS-PC05ST WS-PC06ST WS-PC07ST WS-PC08ST", "thumb": "http://www.chinamesda.com/imageRepository/f4206293-84b7-4d9d-8fad-99d36bbc38b5.jpg" }, { "id": "WS-PC05ST-L WS-PC06ST-L WS-PC07ST-L WS-PC08ST-L", "name": "WS-PC05ST-L WS-PC06ST-L WS-PC07ST-L WS-PC08ST-L", "thumb": "http://www.chinamesda.com/imageRepository/e0e07d86-7b03-4862-9928-ad9a3601d4b0.jpg" }, { "id": "WS-S08T1 WS-S08T2", "name": "WS-S08T1 WS-S08T2", "thumb": "http://www.chinamesda.com/imageRepository/3bc5f96d-9cb1-45d4-b221-8ac20ffe2e44.jpg" }, { "id": "WS-C05", "name": "WS-C05", "thumb": "http://www.chinamesda.com/imageRepository/0dfe06be-2e7a-4c56-9892-0112946673e5.jpg" }, { "id": "WS-S06M", "name": "WS-S06M", "thumb": "http://www.chinamesda.com/imageRepository/586d2b55-dfaa-48ed-ac92-8af6aea4816a.jpg" }, { "id": "WS-S04B", "name": "WS-S04B", "thumb": "http://www.chinamesda.com/imageRepository/b3c9fe82-99e7-4bed-9c36-a58c63513a15.jpg" }, { "id": "WS-PC08A", "name": "WS-PC08A", "thumb": "http://www.chinamesda.com/imageRepository/9e18a35a-b9a8-4fa1-8ed7-fb8928027a4c.jpg" }, { "id": "WS-PC07A", "name": "WS-PC07A", "thumb": "http://www.chinamesda.com/imageRepository/e17e200b-d940-4f49-a861-afc4b3d64170.jpg" }, { "id": "WS-PC05S", "name": "WS-PC05S", "thumb": "http://www.chinamesda.com/imageRepository/7b209fae-dfee-4079-8131-4f23b52f23b6.jpg" }, { "id": "WS-S04", "name": "WS-S04", "thumb": "http://www.chinamesda.com/imageRepository/f4c9a29a-2412-49de-89ed-78644d39b0f1.jpg" }, { "id": "WS-S38", "name": "WS-S38", "thumb": "http://www.chinamesda.com/imageRepository/cc99bf45-48c3-43de-8b3d-ad350212d604.jpg" }, { "id": "WS-S06B", "name": "WS-S06B", "thumb": "http://www.chinamesda.com/imageRepository/ca34a37c-87d8-42c4-a86d-188c3a6481f0.jpg" }, { "id": "WS-S06", "name": "WS-S06", "thumb": "http://www.chinamesda.com/imageRepository/55e21d5f-7d35-4efa-ac49-f734ebae3bbd.jpg" }, { "id": "WS-S04X", "name": "WS-S04X", "thumb": "http://www.chinamesda.com/imageRepository/798ed324-306f-4154-86cc-30913a27e260.jpg" }];


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onSelectCategory(category: ICategory) {
    this.showView(category.id);
  }

  showView(viewName: string) {
    this.view = viewName ? viewName : '';
    this.products = this.products.sort(() => Math.random() - 0.5);
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
