import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ImgDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
