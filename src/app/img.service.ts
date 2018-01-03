import { Injectable } from '@angular/core';
import { ProductImage } from './product-image';
import { IMAGES } from './pics';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MsgService } from './msg.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ImgService {
  getImages = ():Observable<ProductImage[]> => {
    this.msgService.add('Fetched the Images');  
    return this.http.get<ProductImage[]>(this.imagesUrl);
  }
  getImg = (id):Observable<ProductImage> => {
    this.msgService.add(`HeroService: Fetched the image with id:${id}`);
    return of(IMAGES[id - 1]);
  }
  private log(message: string) {
    this.msgService.add('HeroService' + message);
  }
  private imagesUrl = 'api/images';
  constructor(
    private msgService: MsgService,
    private http: HttpClient
  ) { }

}
