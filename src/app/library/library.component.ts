import { Component, OnInit } from '@angular/core';
import { ProductImage } from '../product-image'
import { ImgService } from '../img.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})


export class LibraryComponent implements OnInit {
  images: ProductImage[];
  getImages = ():void => {
    this.imgService.getImages()
      .subscribe((imgs) => {
        this.images = imgs;
      });
  }
  
  constructor(
    private imgService: ImgService,
  ) { }
  ngOnInit() {
    this.getImages();
  }

}
