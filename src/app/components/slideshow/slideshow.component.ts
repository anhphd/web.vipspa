import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {
  slideOptions = {
    autoplay: {
      delay: 2000,
    }
  };
  constructor() { }

  ngOnInit() {}

}
