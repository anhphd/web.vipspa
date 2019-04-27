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

@NgModule({
  declarations: [HeaderComponent,FooterComponent,SlideshowComponent,PaginationComponent,OrderProductFormComponent,LoadingComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule
  ],
  exports: [HeaderComponent,FooterComponent,SlideshowComponent,PaginationComponent,OrderProductFormComponent,LoadingComponent]
})
export class ComponentsModule { }
