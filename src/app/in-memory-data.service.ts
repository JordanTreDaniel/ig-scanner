import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const IMAGES = [
      {
          url: "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg",
          id: 1,
          alt: "White Tiger with Blue and Green Globe"
      },
      {
          url: "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg",
          id: 2,
          alt: "White Tiger with Blue and Green Globe"
      },
      {
          url: "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg",
          id: 3,
          alt: "White Tiger with Blue and Green Globe"
      }
  ];
  return {IMAGES};
  }
  constructor() { }

}
