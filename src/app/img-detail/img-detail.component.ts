import { Component, OnInit, Input } from '@angular/core';
import { ProductImage } from '../product-image';
@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImgDetailComponent implements OnInit {
  @Input() img: ProductImage;
  constructor() { }

  ngOnInit() {
  }

}
