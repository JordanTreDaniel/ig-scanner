import { Injectable } from '@angular/core';
import { ProductImage } from './product-image';
import { IMAGES } from './pics';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MsgService } from './msg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable()
export class ImgService {
  getImages = ():Observable<ProductImage[]> => {
    this.log("Fetching all heroes"); 
    return this.http.get<ProductImage[]>(this.imgsUrl).pipe(
      tap(imgs => console.dir(imgs)),
      catchError(this.handleError('getHeroes', []))
    );
  }
  getImg = (id: number):Observable<ProductImage> => {
    this.log(`Fetching hero with id: ${id}`);
    const url = `${this.imgsUrl}/${id}`;
    return this.http.get<ProductImage>(url).pipe(
      tap(img => console.log("Got hero by id", img)),
      catchError(this.handleError<ProductImage>(`getImg id=${id}`))
    );
  }
  
  updateImg = (img: ProductImage):Observable<any> => {
    return this.http.put(this.imgsUrl, img, httpOptions).pipe(
      tap(() => {this.log(`Updated img #${img.id}`)}),
      catchError(this.handleError<any>(`Update Img`))
    );
  }
  private log(message: string) {
    this.msgService.add('HeroService: ' + message);
  }
  private imgsUrl = 'api/images';
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * param operation - name of the operation that failed
   * param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(
    private msgService: MsgService,
    private http: HttpClient
  ) { }

}
