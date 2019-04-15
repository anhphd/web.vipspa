import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [HeaderComponent,FooterComponent,SlideshowComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent,FooterComponent,SlideshowComponent]
})
export class ComponentsModule { }
