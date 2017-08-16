import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-fera',
  templateUrl: './fera.component.html',
  styleUrls: ['./fera.component.css']
})
export class FeraComponent implements OnInit, AfterViewInit {

public images: Array<any> = [
      {
        defaultImage: 'https://media.giphy.com/media/SufoKsersIO2Y/giphy.gif',
        image: 'http://weknowyourdreams.com/images/paradise/paradise-02.jpg',
        offset: 100
      },
      {
        defaultImage: 'https://media.giphy.com/media/SufoKsersIO2Y/giphy.gif',
        image: 'http://weknowyourdreams.com/images/paradise/paradise-05.jpg',
        offset: 100
      },
      {
        defaultImage: 'https://media.giphy.com/media/SufoKsersIO2Y/giphy.gif',
        image: 'http://weknowyourdreams.com/images/paradise/paradise-02.jpg',
        offset: 100
      },
      {
        defaultImage: 'https://media.giphy.com/media/SufoKsersIO2Y/giphy.gif',
        image: 'http://weknowyourdreams.com/images/paradise/paradise-05.jpg',
        offset: 100
      }
    ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let s = 'script';
    let id = 'twitter-wjs';
    let js: any, fjs = document.getElementsByTagName(s)[0], p = 'https';

    if (!document.getElementById(id)) {
      js = document.createElement(s);
      js.id = id;
      js.src = p + '://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
    }

  }


}
