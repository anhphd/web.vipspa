import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from 'src/classes/interface/ICategory';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss'],
})
export class CategoryPreviewComponent implements OnInit {
  
  @Input('data') category : ICategory

  constructor() { }

  ngOnInit() {}

}
