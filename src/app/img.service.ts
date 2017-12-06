import { Injectable } from '@angular/core';
import { ProductImage } from './product-image';
import { IMAGES } from './pics';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MsgService } from './msg.service';
@Injectable()
export class ImgService {
  getImages = ():Observable<ProductImage[]> => {
    this.msgService.add('Fetched the Images');  
    return of(IMAGES);
  }
  getImg = (id):Observable<ProductImage> => {
    this.msgService.add(`HeroService: Fetched the image with id:${id}`);
    return of(IMAGES[id - 1]);
  }
  constructor(
    private msgService: MsgService
  ) { }

}
