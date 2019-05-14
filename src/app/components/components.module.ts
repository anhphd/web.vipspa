import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PipesModule } from '../pipes/pipes.module';
import { OrderProductFormComponent } from './order-product-form/order-product-form.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryPreviewComponent } from './category-preview/category-preview.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlideshowComponent,
    PaginationComponent,
    OrderProductFormComponent,
    LoadingComponent,
    ProductComponent,
    CategoryPreviewComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlideshowComponent,
    PaginationComponent,
    OrderProductFormComponent,
    LoadingComponent,
    ProductComponent,
    CategoryPreviewComponent
  ]
})
export class ComponentsModule { }
