import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../pics';
import { ProductImage } from '../product-image'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  images = IMAGES;
  selectedImg:ProductImage = this.images[0];
  onClick = (n:ProductImage) => {
    this.selectedImg = n;
  }
  constructor() { }

  ngOnInit() {
  }

}
