import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'company', loadChildren: './company/company.module#CompanyPageModule' },
  { path: 'project', loadChildren: './project/project.module#ProjectPageModule' },
  { path: 'product/:categoryID', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'product/details/:productID', loadChildren: './product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'download', loadChildren: './download/download.module#DownloadPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
