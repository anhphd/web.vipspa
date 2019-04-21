import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [HeaderComponent,FooterComponent,SlideshowComponent,PaginationComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [HeaderComponent,FooterComponent,SlideshowComponent,PaginationComponent]
})
export class ComponentsModule { }
