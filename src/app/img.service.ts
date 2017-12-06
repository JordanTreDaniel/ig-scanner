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
  constructor(
    private msgService: MsgService
  ) { }

}
