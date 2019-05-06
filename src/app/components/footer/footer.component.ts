import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public _DataService: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this._DataService.LoadData().then(() => {
        this.onLoadedData();
      });
    }, 1000);
  }
  onLoadedData() {
    let facebookFanPageContainer = document.getElementById('_ID_FacebookFanPage');
    if (facebookFanPageContainer) {
      facebookFanPageContainer.innerHTML = `<div class="fb-page" 
      data-href="${this._DataService._AppData['socials'].facebook_page_url}" data-tabs="timeline" data-width=""
      data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
      data-show-facepile="true">
      <blockquote cite="${this._DataService._AppData['socials'].facebook_page_url}" class="fb-xfbml-parse-ignore"><a
          href="${this._DataService._AppData['socials'].facebook_page_url}">${this._DataService._AppData['socials'].facebook_page_name}</a>
      </blockquote>
      </div>`;
    }


    let googleMapContainer = document.getElementById("_ID_GoogleMapLocation");
    if (googleMapContainer) {
      googleMapContainer.innerHTML = ` <div class="gmap_canvas"><iframe width="100%" height="300" id="gmap_canvas"                      
      src="${this._DataService._AppData['socials'].googlemaps_location}" frameborder="0" scrolling="no"
      marginheight="0" marginwidth="0"></iframe></div>
        <style>
          .mapouter {
            position: relative;
            text-align: right;
            height: 300px;
            width: 100%;
          }
  
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      height: 300px;
      width: 100%;
    }
  </style>`;

    }

  }


}
