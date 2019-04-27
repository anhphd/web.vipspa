import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  { path: 'trang-chu', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cong-ty', loadChildren: './company/company.module#CompanyPageModule' },
  { path: 'du-an', loadChildren: './project/project.module#ProjectPageModule' },
  { path: 'san-pham/:categoryID', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'san-pham', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'san-pham/chi-tiet/:productID', loadChildren: './product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'download', loadChildren: './download/download.module#DownloadPageModule' },
  { path: 'tin-tuc', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'lien-he', loadChildren: './contact/contact.module#ContactPageModule' },  { path: 'dich-vu', loadChildren: './pages/dich-vu/dich-vu.module#DichVuPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
