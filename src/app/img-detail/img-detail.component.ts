import { Component, OnInit, Input } from '@angular/core';
import { ProductImage } from '../product-image';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImgService }  from '../img.service';
@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImgDetailComponent implements OnInit {
  img: ProductImage;
  getHero = ():void => {
    const id = this.route.snapshot.paramMap.get('id');
    this.imgService.getImg(id)
      .subscribe((img) => {
        this.img = img;
      });
  }
  goBack = ():void => {
    this.location.back();
  }
  constructor(
    public imgService: ImgService,
    public location: Location,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getHero();
  }

}
