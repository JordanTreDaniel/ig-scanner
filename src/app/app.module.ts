import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { ImgDetailComponent } from './img-detail/img-detail.component';

import { ImgService } from './img.service';
import { MsgService } from './msg.service';
import { MsgsComponent } from './msgs/msgs.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ImgDetailComponent,
    MsgsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ImgService, MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
