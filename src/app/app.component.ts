import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';
import { MenuService } from './services/menu.service';
import { DichVuService } from './services/dich-vu.service';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public _DataService: DataService,
    public _MenuService: MenuService,
    public _DichVuService: DichVuService,
    public _CategoryService: CategoryService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this._MenuService.LoadData().then(() => {
        this._DichVuService.LoadData().then(() => {
          this._MenuService.onResponseServices(this._DichVuService.Items());
        });
        this._CategoryService.LoadData().then(() => {
          this._MenuService.onResponseCategories(this._CategoryService.Items());
        });
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
